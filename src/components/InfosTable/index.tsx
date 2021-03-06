import deleteImg from "../../assets/delete.svg";
import editImg from "../../assets/edit.svg";
import { IInventory } from "../../contexts/InventoryContext";
import { useInventory } from "../../hooks/useInventory";
import { Container } from "./styles";

interface TableProps {
  onOpenDeleteInventoryModal: () => void;
  onClickDelete: (inventory: IInventory) => void;
}

export function InfosTable({ onClickDelete }: TableProps) {
  const { inventorys } = useInventory();

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
          {inventorys ? (
            inventorys.map((inventory: IInventory, index: number) => {
              return (
                <tr key={index}>
                  <td>{inventory.place}</td>
                  <td>{inventory.volume}</td>
                  <td>{inventory.batch}</td>
                  <td>{inventory.quantity}</td>
                  <td className="icon-td">
                    <button>
                      <img src={editImg} alt="Deletar inventario" />
                    </button>

                    <button
                      onClick={() => {
                        onClickDelete(inventory);
                      }}
                    >
                      <img src={deleteImg} alt="Deletar inventario" />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Nenhum inventario encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}
