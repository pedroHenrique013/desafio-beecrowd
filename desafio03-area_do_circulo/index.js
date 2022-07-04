/* A fórmula para calcular a área de uma circunferência é: area = π . raio2. 
Considerando para este problema que π = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando 
por π. */

function areaDoCirculo(raio) {
    if (typeof raio !== 'number') {
        throw new Error("O valor do raio deve ser um número");
    }

    const n = 3.14159;
    let area = n * (raio ** 2);
    return `A= ${area}`;
}

try {
    console.log(areaDoCirculo("##"));
} catch (error) {
    console.log(error.message);
}