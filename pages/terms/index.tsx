import React from "react";

const TermosDeServico: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl font-bold mb-6">1. Termos</h2>
      <p className="mb-4">
        Ao acessar o site{" "}
        <a className="text-blue-600 hover:underline" href="/">
          Acácia Confeiteira
        </a>
        , você concorda em cumprir estes termos de serviço, todas as leis e
        regulamentos aplicáveis, e declara ser responsável pelo cumprimento das
        leis locais. Caso não concorde com algum destes termos, está proibido de
        utilizar o site. Os materiais são protegidos por direitos autorais e
        marcas comerciais aplicáveis.
      </p>

      <h2 className="text-3xl font-bold mb-6">2. Uso de Licença</h2>
      <p className="mb-4">
        É concedida permissão para baixar temporariamente uma cópia dos
        materiais (informações ou software) do site Acácia Confeiteira apenas
        para visualização pessoal e não comercial. Esta é uma licença, não uma
        transferência de título. Sob esta licença, você não pode:
      </p>

      <ol className="list-decimal pl-6 mb-4 space-y-1">
        <li>Modificar ou copiar os materiais;</li>
        <li>
          Usar os materiais para fins comerciais ou para exibição pública
          (comercial ou não);
        </li>
        <li>
          Tentar descompilar ou realizar engenharia reversa de qualquer software
          do site;
        </li>
        <li>
          Remover quaisquer direitos autorais ou outras notações de propriedade;
        </li>
        <li>
          Transferir os materiais para outra pessoa ou espelhar os materiais em
          qualquer outro servidor.
        </li>
      </ol>

      <p className="mb-4">
        Esta licença será automaticamente encerrada caso você viole qualquer uma
        dessas restrições, podendo ser revogada pela Acácia Confeiteira a
        qualquer momento. Ao encerrar a visualização dos materiais ou ao término
        da licença, você deve apagar todos os materiais baixados em sua posse,
        seja em formato digital ou impresso.
      </p>

      <h2 className="text-3xl font-bold mb-6">
        3. Isenção de Responsabilidade
      </h2>
      <ol className="list-decimal pl-6 mb-4 space-y-1">
        <li>
          Os materiais no site são fornecidos &rdquo;como estão&#34;. A Acácia
          Confeiteira não oferece garantias, expressas ou implícitas, incluindo,
          sem limitação, garantias de comercialização, adequação a um fim
          específico ou não violação de propriedade intelectual.
        </li>
        <li>
          A Acácia Confeiteira não garante a precisão ou confiabilidade dos
          materiais, nem dos resultados esperados pelo uso no site ou em sites
          vinculados.
        </li>
      </ol>

      <h2 className="text-3xl font-bold mb-6">4. Limitações</h2>
      <p className="mb-4">
        Em nenhum caso a Acácia Confeiteira ou seus fornecedores serão
        responsáveis por quaisquer danos (incluindo perda de dados, lucros ou
        interrupções) decorrentes do uso ou da impossibilidade de uso dos
        materiais. Isso se aplica mesmo que a Acácia Confeiteira tenha sido
        notificada da possibilidade desses danos. Algumas jurisdições não
        permitem tais limitações, então essas cláusulas podem não se aplicar a
        você.
      </p>

      <h2 className="text-3xl font-bold mb-6">5. Precisão dos Materiais</h2>
      <p className="mb-4">
        Os materiais disponíveis no site podem conter erros técnicos,
        tipográficos ou fotográficos. A Acácia Confeiteira não garante que o
        conteúdo seja exato, completo ou atual. As informações podem ser
        alteradas a qualquer momento sem aviso prévio, mas não há compromisso em
        atualizá-las.
      </p>

      <h2 className="text-3xl font-bold mb-6">6. Links</h2>
      <p className="mb-4">
        A Acácia Confeiteira não revisou todos os sites vinculados e não é
        responsável pelo conteúdo de nenhum deles. A inclusão de links não
        significa endosso. O uso de qualquer site vinculado é por conta e risco
        do usuário.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Modificações</h3>
      <p className="mb-4">
        A Acácia Confeiteira pode alterar estes termos a qualquer momento sem
        aviso prévio. Ao continuar usando o site, você concorda em seguir os
        termos atualizados.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Lei Aplicável</h3>
      <p className="mb-4">
        Estes termos são regidos pelas leis do Acácia Confeiteira e, ao usá-lo,
        você concorda com a jurisdição exclusiva dos tribunais desse local.
      </p>
    </div>
  );
};

export default TermosDeServico;
