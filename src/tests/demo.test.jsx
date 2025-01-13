
//in package.json use: "test": "jest --watchAll" to keep running the tetsing tool
//const sum = require('./Sum');
import Sum from './Sum'
import renderer from 'react-test-renderer';

test('Demo prueba', () => {

});

test('adds 1 + 2 to equal 3', () => {
    const component = renderer.create(
        <Sum a={1} b={2} />,
      );

      let s = component.toJSON();
      
  });