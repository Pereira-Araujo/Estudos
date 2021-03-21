const ShippingStatus = artifacts.require("Shipping");
const truffleAssert = require('truffle-assertions');

contract('Shipping', () => {

  it("should return the status Pending", async () => {
    //Instância do nosso contrato implantado
    const instance = await ShippingStatus.deployed();
    // Verificando o status inicial em nosso contrato
    const status = await instance.Status();
    // Verificando se o status é inicialmente pendente como definido no construtor
    assert.equal(status, "Pending");
  });
  it("should return the status Shipped", async () => {
    //Instância do nosso contrato implantado
    const instance = await ShippingStatus.deployed();

    //Chamando a função Shipped()
    await instance.Shipped();

    // Verificando o status inicial em nosso contrato
    const status = await instance.Status();

    // Verificando se o status é enviado
    assert.equal(status, "Shipped");
  });

  it("should return the status Delivered", async () => {

    //Instância do nosso contrato implantado
    const instance = await ShippingStatus.deployed();

    // Chamando a função Shipped()
    await instance.Delivered();

    //Verificando o status inicial em nosso contrato
    const status = await instance.Status();

    // Verificando se o status é entrega
    assert.equal(status, "Delivered");
  });
});
//TESTE
it('should return correct event description', async()=>{

  // Instância do nosso contrato implantado
  const instance = await ShippingStatus.deployed();

  // Chamando a função Delivered() 
  const delivered = await instance.Delivered();

  // Checando se a verificação do evento está correta
  truffleAssert.eventEmitted(delivered, 'LogNewAlert', (event) =>{
    return event.description == 'Your package has arrived';
  });
});