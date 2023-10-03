import React from 'react';

const Support: React.FC = () => {
  return (
    <div className='flex flex-col gap-y-4 max-w-5xl mx-auto mt-16'>
        <h1 className="text-2xl font-bold pb-12">Suporte</h1>

        <div className= 'text-lg'>
          <p>
            Na PEDRAMOURA, estamos comprometidos em fornecer a você a melhor experiência possível.
            Nosso suporte técnico está aqui para ajudá-lo a resolver qualquer problema 
            ou responder a qualquer perguntaque você possa ter.
          </p>

          <p className='pt-6'> Como podemos ajudar você hoje? </p> 

          <p className='pt-6'>
            Nossa equipe de suporte está à disposição para ajudá-lo 24 horas por dia,
            7 dias por semana. Temos uma equipe altamente qualificada de especialistas
            prontos para lidar com uma ampla variedade de consultas e problemas. 
            Seja qual for a sua necessidade, estamos aqui para ajudar.
          </p>
          
          <p className='pt-6'> Entre em contato conosco!</p>

          <p className='pt-6'> Para entrar em contato conosco, você pode escolher uma das seguintes opções:</p>
  
          <ul className="list-disc pt-6">
            <li >
              <b>Chat ao vivo:</b> Fale com um de nossos agentes em tempo real. 
              Basta clicar no icone de chat no canto inferior direito da tela.
            </li>

            <li className="pt-2">
              <b>E-mail:</b> Envie-nos um e-mail para <b>pedidos@pedramoura.com</b> e
               responderemos o mais rápido possível.
            </li>

            <li className="pt-2">
              <b>Telefone:</b> Ligue para o nosso número de suporte <b>(51) 99796-4848</b>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Support;
