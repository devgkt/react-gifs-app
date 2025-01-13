
//rafc short cut
const componentVar = 'aa.com';


const getResult = () => {
    return 4+4;
}
const getResultWithParams = (a,b) => {
    return a+b;
}
export const FirstApp = ({title = 'default value'}) =>{

    const myVar = 123;
    const name = 'German Rodriguez';
    const msg = {
        name: 'German',
        age : 35,
        profile: 'dev'
    };
    const flag = true;
    return (
       <>
            <h1>Props : {title}</h1>
            <h1>First varieble : {componentVar}</h1>
            <h2>First App Component from : {name}</h2>
            <h3>Texto : {myVar}</h3>
            <h3>Texto : {JSON.stringify(msg)}</h3>
            <h3>Texto :{JSON.stringify(flag)}</h3>
            <h1>Resultado: {getResultWithParams(3,3)}</h1>
            <h3>Resultado: {getResult()}</h3>
       </>
    );
};
