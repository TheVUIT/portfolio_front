// UserInfosServices.js

import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";

// Fonction pour réauthentifier l'utilisateur avec son mot de passe actuel
export function reauthenticateUser(currentPassword) {
  const auth = getAuth();
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(user.email, currentPassword);

  return reauthenticateWithCredential(user, credential);
}

// Fonction pour changer le mot de passe de l'utilisateur
export function changeUserPassword(newPassword) {
  const auth = getAuth();
  const user = auth.currentUser;

  return updatePassword(user, newPassword);
}

// Fonction pour déconnecter l'utilisateur après changement de mot de passe
export function logoutUser() {
  const auth = getAuth();
  return auth.signOut();
}
