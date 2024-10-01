import React from "react";
import { useState } from "react";
import { reauthenticateUser, changeUserPassword,  logoutUser} from "../services/userInfosService";
import GoBackBtn from "src/components/GoBackBtn";

const ConexionInfosPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await reauthenticateUser(currentPassword);

      await changeUserPassword(newPassword);
      setSuccess("Mot de passe mis à jour avec succès !");

      await logoutUser();
      window.location.href = "/login";
    } catch (error) {
      setError("Erreur : " + error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <h2 className="text-texte_secondary font-ubuntu text-2xl">
            Changer le mot de passe
          </h2>

          <input
            className="form-input"
            type="password"
            placeholder="Mot de passe actuel"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <input
            className="form-input"
            type="password"
            placeholder="Nouveau mot de passe"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button className="custom-btn" type="submit">
            Changer
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
      <GoBackBtn />
    </div>
  );
};

export default ConexionInfosPage;
