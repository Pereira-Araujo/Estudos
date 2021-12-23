pragma solidity >=0.5.12<=0.8.0;

contract Shipping
{
    // Nossos valores predefinidos para envio listados como enums
    enum ShippingStatus { Pending, Shipped, Delivered }
 
    // Salve Enum ShippingStatus no status da variável
    ShippingStatus private status;

    // evento a lançar quando o pacote chegar
    event LogNewAlert(string description);

    // Isso inicializa nosso estado contratual (define enum para pendente quando o programa é iniciado)
    constructor() public {
        status = ShippingStatus.Pending;
    }
    // Função para mudar para envio
    function Shipped() public {
        status = ShippingStatus.Shipped;
        emit LogNewAlert("Your package has been shipped");
    }

    // Função para mudar para entregua
    function Delivered() public {
        status = ShippingStatus.Delivered;
        emit LogNewAlert("Your package has arrived");
    }

    // função para obter o status do envio
    function getStatus(ShippingStatus _status) internal pure returns (string memory) {
     // Check the current status and return the correct name
     if (ShippingStatus.Pending == _status) return "Pending";
     if (ShippingStatus.Shipped == _status) return "Shipped";
     if (ShippingStatus.Delivered == _status) return "Delivered";
    }

   // Obtenha o status do seu item enviado
    function Status() public view returns (string memory) {
         ShippingStatus _status = status;
         return getStatus(_status);
    }

}