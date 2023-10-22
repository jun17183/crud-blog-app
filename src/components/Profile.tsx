import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { toast } from "react-toastify";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

const onSignOut = async () => {
    try {
        const auth = getAuth(app);
        await signOut(auth);
        toast.success("로그아웃 되었습니다.");
    } catch (err: any) {
        toast.error(err?.code);
        console.log(err);
    }
}

export default function Profile() {
    const { user } = useContext(AuthContext);

    return (
        <div className="profile__box">
            <div className="flex__box-lg">
                <div className="profile__image" />
                <div>
                    <div className="profile__email">{user?.email}</div>
                    <div className="profile__name">{user?.displayName || "닉네임"}</div>
                </div>
            </div>
            <div role="presentation" className="profile__logout" onClick={onSignOut}>
                로그아웃
            </div>
        </div>
    );
}