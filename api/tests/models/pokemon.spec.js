const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  //Validando Nombre Requerido 
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
  });
  //Validando tipo de dato en HP
  describe('HP',()=>{
    it('Lanza un error si HP no es un numero', (done) => {
      Pokemon.create({hp: 'Hello'})
        .then(()=>done(new Error ('debe ser un numero')))
        .catch(() => done());
    })
    it('Funciona con un numero', () =>{
      Pokemon.create({attack: 20})
    })
  })
});
