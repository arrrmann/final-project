import { User } from "firebase/auth"

export interface RegistrationProps {
    handleSignOut: () => void,
    user: User | null
}