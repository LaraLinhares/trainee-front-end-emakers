import React from 'react';
// Define os tipos das propriedades do componente
import { oneOf, bool } from 'prop-types';
// Criação de links entre diferentes rotas
import { Link } from 'react-router-dom';
// Combina classes de CSS de forma condicional
import cx from 'classnames';
import './EntrarButton.css'

// Prefixa as classes CSS do componente
const cbn = 'entrar-button';

const EntrarButton = ({ onClick, to, theme, rounded, children, className, ...restProps }) => {
  const Component = to ? Link : 'button';

  return (
    <Component
      {...restProps}
      className={cx(className, cbn, `${cbn}--${theme}`, {
        [`${cbn}--rounded`]: rounded,
      })}
      onClick={onClick}
      to={to}
    >
      {children}
    </Component>
  )
}

// Define o tema do botão
EntrarButton.propTypes = {
  rounded: bool,
  theme: oneOf([
    // Estilos de botões
    'bordered',
    'contained',
  ]),
};

export default EntrarButton;