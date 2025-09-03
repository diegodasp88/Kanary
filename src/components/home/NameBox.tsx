import React from 'react';
type NameBoxProps = {
  name: string;
  otherName: string;
};

const NameBox = ({ name, otherName }: NameBoxProps) => {
  // forma de desestruturação dentro do componente: const { name } = props;
  // console.log('props de NameBox:', props);
  // isso aqui de cima é a mesma coisa que export function NameBox(){}
  return (
    <h1>
      NameBox == {name} {otherName}
    </h1>
  );
};

export default NameBox;
