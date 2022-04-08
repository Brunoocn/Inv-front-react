import deleteImg from "../../assets/delete.svg";
import editImg from "../../assets/edit.svg";
import { Container } from "./styles";

export function InfosTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Local</th>
            <th>Volume</th>
            <th>Lote</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Santo André</td>
            <td>200kg</td>
            <td>2302032</td>
            <td>20</td>
            <td className="icon-td">
              <button>
                <img src={editImg} alt="Deletar inventario" />
              </button>
              <button>
                <img src={deleteImg} alt="Deletar inventario" />
              </button>
            </td>
          </tr>
          {/* {users && !usersIsLoading ? (
            users.map((user: IUser, index: number) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="icon-td">
                    <button>
                      <img src={deleteImg} alt="Deletar inventario" />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            !usersIsLoading ? 
            <tr>
              <td>Nenhum usuário encontrado.</td>
            </tr>
            : 
            <tr>
              <td>Carregando...</td>
            </tr>
          )} */}
        </tbody>
      </table>
    </Container>
  );
}
