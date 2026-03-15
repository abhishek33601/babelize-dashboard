import { useTranslation } from "react-i18next";
import { getUsers } from "../api/fakeApi";

const Users = () => {const { t } = useTranslation();
  const users = getUsers();

  return (
    <div className="content">
      <h2>{t("users.userManagement")}</h2>
      <table>
        <thead>
          <tr>
            <th>{t("users.name")}</th>
            <th>{t("users.role")}</th>
            <th>{t("users.status")}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
          <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>);

};

export default Users;