import { Link } from "react-router-dom"

// #region Cheatsheet

// <p className="story_quote"></p>
// <Link className="story_inside-link" to={/address}>{word}</Link>

//

export const stories = [
  {
    storyId: "1029_1",
    title: "Sombras do Passado",
    ageRating: "16 Anos",
    tags: [
      "#laximit", 
      "#raiya", 
      "#sr_ravenhart",
      "#sra_ravenhart",
      "#flicko",
      "#ardan",
      "#valthorn"
    ],
    storyYear: "1029",
    storyLink: "/historia/1029_1",
    links: [
      { paragraph: <p><Link className="story_inside-link" to="/personagem/laximit">Laximit</Link> e as Bestas estavam descansando no topo de um alto prédio em Novark, após mais um dia sem problemas na cidade. <Link className="story_inside-link" to="/personagem/aera">Aera</Link> e <Link className="story_inside-link" to="/personagem/hiyou">Hiyou</Link> treinavam seus movimentos básicos de luta, <Link className="story_inside-link" to="/personagem/umbraza">Umbraza</Link> estava apoiado em uma parede, de olhos fechados, <Link className="story_inside-link" to="/personagem/nagael">Nagael</Link> estava sentado em um canto, lendo um de seus livros, <Link className="story_inside-link" to="/personagem/kouji">Kouji</Link> estava deitado com a cabeça no colo de <Link className="story_inside-link" to="/personagem/fubuki">Fubuki</Link>, enquanto ela lhe fazia um cafuné; e <Link className="story_inside-link" to="/personagem/raiya">Raiya</Link> estava agachada na borda do prédio. Então, Laximit se levanta.</p> },
      { paragraph: <p className="story_quote">- Laximit: *(bocejo)* Então, gente, acho que é hora de dar mais uma olhada por ai né?</p> },
      { paragraph: <p>Ouvindo isso, todos começam a se levantar e se preparar para voltar a patrulhar a cidade em busca de ameaças. Laximit começa a decidir para quais direções cada um irá, mas então percebe que Raiya não estava junto deles e ainda estava na borda do prédio. Ele tenta chamá-la, mas ela não responde. Desconfiado, ele vai checar se está tudo bem e, ao se aproximar, percebe que ela está sussurrando repetidamente uma palavra.</p> },
      { paragraph: <p className="story_quote">- Raiya: 'Raven…hart… Raven…hart…'</p> },
      { paragraph: <p>Laximit então tenta cutucá-la, mas ela não se mexe. Ao olhar para seu rosto, percebe que seus olhos estão com um brilho branco, enquanto ela continua repetindo a mesma palavra. Nesse momento, ele se preocupa e tenta dar alguns tapinhas em seu rosto para tirá-la desse transe, infelizmente sem sucesso.</p> },
      { paragraph: <p>Ele então a deixa em pé, tenta balançá-la, mas ela ainda não responde. Sem muitas opções, decide desferir um soco, não muito forte, em seu abdômen, movimento que finalmente demonstra resultado e a tira desse transe.</p> },
      { paragraph: <p>Eles então perguntam o que aconteceu e por que ela ficou nesse estado. Raiya diz que não sabe o motivo, mas que, em sua mente, só se passa o pensamento de que ela precisa ir para um local fora de Novark, pois, segundo ela:</p> },
      { paragraph: <p className="story_quote">- Raiya: 'Eu… eu acho que recuperei uma antiga memória minha…'</p> },
      { paragraph: <p>Nesse momento, todos se espantam, pois o passado das Bestas era um mistério desde que começaram a acompanhar Laximit. Com isso, todos decidem que vão ajudar.</p> },
      { paragraph: <p>Kouji então pergunta onde é esse lugar que ela precisa ir, e ela só sabe a direção. Laximit então lembra que já ouviu falar sobre um feitiço de localização a partir da mente de uma pessoa. Ele pede para Nagael buscar em seu grimório algo desse tipo, e, após alguns minutos de pesquisa, Nagael encontra o feitiço <Link className="story_inside-link" to="/magias/memorathis">Memorathis</Link>. Laximit então usa o feitiço, e um mapa de energia aparece à sua frente. Ele encosta na cabeça de Raiya e um brilho surge no Noroeste do mapa, na região de Valthorn.</p> },
      { paragraph: <p>Com isso, eles decidem que a melhor coisa a se fazer é ir até lá para tentar descobrir mais sobre esse suposto passado.</p> },
      { paragraph: <p>Então, Kouji, Hiyou, Aera e Fubuki já se preparam para essa viagem, mas Laximit diz que é melhor não, afinal, não podiam simplesmente deixar Novark totalmente desprotegida. A melhor opção era apenas ele e Raiya irem, enquanto o restante cuidava da cidade.</p> },
      { paragraph: <p>Após um momento debatendo a ideia, todos concordam, e então os dois se preparam para a viagem. Depois de algumas horas, eles se despedem e partem para Valthorn.</p> },
      { paragraph: <p>Com a velocidade de Raiya, conseguem chegar ao destino em poucas horas e se deparam com uma terra totalmente desolada, rochosa, sem vegetação, sem vida, e uma construção em destaque: uma enorme mansão à beira-mar.</p> },
      { paragraph: <p>Chegando perto da entrada, eles percebem empregados fora da mansão, na entrada do castelo.</p> },
      { paragraph: <p className="story_quote">- Laximit: 'Então, lembra de algo mais agora que a gente tá aqui?'</p> },
      { paragraph: <p className="story_quote">- Raiya: 'Não, mas eu sinto que já entrei nessa mansão. Talvez a gente possa tentar entrar.'</p> },
      { paragraph: <p className="story_quote">- Laximit: 'Acho que sim.'</p> },
      { paragraph: <p>Eles então se aproximam do grande portão e percebem um pequeno botão com alguns furos embaixo. Laximit o aperta, e um dos empregados vai até o lado, entra em um pequeno carro que estava por perto, dirige até a entrada da mansão e se aproxima deles.</p> },
      { paragraph: <p className="story_quote">- Empregado: 'Boa noite, Senhor e Senhorita. Bem-vindos à Mansão Ravenhart. O que os traz aqui?'</p> },
      { paragraph: <p>Eles então confirmam que estão no local certo, visto que Raiya estava repetindo o nome Ravenhart mais cedo. Os dois explicam a situação de Raiya e perguntam se podem conversar com os donos da mansão para verificar se sabem algo sobre seu passado.</p> },
      { paragraph: <p>O empregado então pede um tempo para notificar seus chefes e, após um minuto, recebem uma resposta, os Ravenhart aceitaram recebê-los.</p> },
      { paragraph: <p>Então, todos entram no carro e são levados até a porta da frente da mansão. Assim que chegam, os empregados abrem a porta, e eles encontram duas pessoas: um homem mais velho, com poucos cabelos brancos nas laterais de sua cabeça, uma barriga estufada e um bigode grosso, usando um terno azul-escuro chique com alguns detalhes em dourado. Ao lado dele, uma mulher de cabelos loiros longos, um corpo magro e um longo vestido preto digno de ser usado em um desfile de moda, com brincos feitos de diamantes, além de portar joias em seu pescoço e pulsos.</p> },
      { paragraph: <p className="story_quote">- Homem: 'Olá, jovens. Sejam bem-vindos ao nosso lar. Sintam-se em casa, por favor.'</p> },
      { paragraph: <p>Então, Laximit e Raiya entram. Raiya observa ao redor com a esperança de liberar mais memórias, mas sem sucesso. O casal então os convida a se sentar na sala para que possam conversar e pede para que uma de suas empregadas prepare um de seus chás mais especiais para os visitantes.</p> },
      { paragraph: <p className="story_quote">- <Link className="story_inside-link" to="/personagem/sr_ravenhart">Sr. Ravenhart</Link>: 'Então, jovens, a que devo o prazer de sua visita?'</p> },
      { paragraph: <p className="story_quote">- Laximit: 'Primeiramente, obrigado por nos receber. Sei que devem ser bem ocupados, e desculpem caso tenhamos atrapalhado algo.'</p> },
      { paragraph: <p className="story_quote">- <Link className="story_inside-link" to="/personagem/sra_ravenhart">Sra. Ravenhart</Link>: 'Ah, não se preocupem, não atrapalharam nada.' </p> },
      { paragraph: <p className="story_quote">- Laximit: 'Bem, meu nome é Laximit e essa é a Raiya, o motivo de nossa visita é que minha amiga aqui não se lembra de nada do seu passado, e acreditamos que esse lugar tenha algo que possa ajudar a lembrar, por acaso os senhores conhecem ela?'</p> },
      { paragraph: <p className="story_quote">- Sr. Ravenhart: 'É claro que lembramos, não teríamos como esquecê-la. Você a chamou de Raiya, mas nós a conhecemos como Alice. Não sabemos de onde ela veio, mas muitos anos atrás ela apareceu em nossa mansão completamente fragilizada e faminta. Acreditamos que tenha sido abandonada por sua família ou algo do tipo. Então, sentimos que devíamos ajudar. Cuidamos dela, demos um lar onde ela podia ser livre e brincar com nossos filhos.'</p> },
      { paragraph: <p className="story_quote">- Laximit: 'Entendo, mas sabe dizer o que aconteceu no final? Algum motivo para que ela tenha ido embora?'</p> },
      { paragraph: <p className="story_quote">- Sra. Ravenhart: 'Ah, meu Deus, esse dia... me entristece só de lembrar.'</p> },
      { paragraph: <p className="story_quote">- Sr. Ravenhart: 'Tudo bem, querida, eu conto. Veja bem, nós tínhamos um pequeno cãozinho, lindo, e Alice amava brincar com ele. Mas, em um certo dia, ele acabou falecendo, e ela ficou devastada com a notícia. Chorou a tarde inteira, até que, em certo momento, ficamos preocupados e fomos ver o que havia acontecido, mas não conseguimos encontrá-la em nenhum lugar. Após isso, nunca mais conseguimos a encontrar. Pensamos que nunca mais a veríamos, mas agora estamos muito felizes em ver que está tudo bem!'</p> },
      { paragraph: <p>Então, a empregada aparece para servir o chá que foi pedido, e todos começam a tomar, enquanto o casal continua a contar mais histórias sobre a casa. Até que, em certo momento, Laximit e Raiya se sentem um pouco tontos e então apagam completamente.</p> },
      { paragraph: <p>Após um tempo, eles acordam, separados um do outro, mas ambos presos em correntes no que parecem ser prisões. Assim que Laximit abre os olhos, ele vê a Sra. Ravenhart mexendo em algumas ferramentas.</p> },
      { paragraph: <p className="story_quote">- Laximit: 'O... que... tá acontecendo?'</p> },
      { paragraph: <p className="story_quote">- Sra. Ravenhart: 'Olha só, acordou mais cedo do que eu esperava, querido.'</p> },
      { paragraph: <p>Laximit tenta se soltar, mas, mesmo com sua força, não consegue quebrar as correntes. Então, a Sra. Ravenhart pega um dos canivetes que estava na mesa e se aproxima dele.</p> },
      { paragraph: <p>Então, ela começa a cortar sua blusa e a abre, deixando seu peito à mostra. Com o canivete, desfere um corte rápido em seu abdômen, fazendo com que comece a sangrar. Ela então se afasta para pegar mais ferramentas de tortura.</p> },
      { paragraph: <p>Enquanto isso, do outro lado do castelo, Raiya também se encontra presa, já acordada, e conversa com o Sr. Ravenhart.</p> },
      { paragraph: <p className="story_quote">- Sr. Ravenhart: 'Sabe, eu não esperava que você fosse voltar um dia. Afinal, eu mesmo me livrei do seu corpo. Isso definitivamente é uma surpresa.'</p>},
      { paragraph: <p className="story_quote">- Raiya: 'E agora, vai fazer o quê, me torturar?'</p> },
      { paragraph: <p className="story_quote">- Sr. Ravenhart: 'Torturar? Ha ha ha, você realmente não se lembra de nada, não é? Tortura é coisa da minha esposa. Eu gosto de fazer outra coisa... Ah, isso é quase nostálgico, se pelo menos eu não tivesse me livrado do Flicko...'</p> },
      { paragraph: <p>Nesse momento, o mundo de Raiya parou. Somente aquela palavra era necessária para desbloquear memórias que seu cérebro reprimia.</p> },
      { paragraph: <p>Muitos anos atrás, uma pequena garota por volta de 12-13 anos se aproximava de uma mansão, completamente abatida e machucada, e assim que foi atendida por um casal, pergunta se teriam alguma comida para ela, mas ela se surpreendeu com a bondade do casal, que não só aceitou a alimentar, como permitiu que ela vivesse nesta mansão, ela então entrou de bom grado, conheceu seus dois filhos, duas crianças com um sorriso tão puro, assim como o cãozinho da familia, chamado de <Link className="story_inside-link" to="/personagem/flicko">Flicko</Link>.</p> },
      { paragraph: <p>Pela primeira vez na vida, ela foi feliz, dormia em uma cama, comia uma boa comida, tinha amigos pra brincar, até que um dia, após comer seu almoço, acabou adormecendo, acordou então em uma sala escura e fria, com grandes dores em todo seu corpo.</p> },
      { paragraph: <p>Ela foi até a porta e bateu nela, na esperança que alguém a libertasse, até que o homem que a acolheu abre a porta, ela pergunta o que houve, e o homem apenas diz que para ela permanecer na casa, precisava receber algo em troca, mas obviamente não iria cobrar nenhum dinheiro de uma simples criança, portanto, como pagamento resolveu pegar algo que considerava um preço justo, sua pureza.</p> },
      { paragraph: <p>A partir daquele dia, ao menos uma vez ao dia ele iria realizar atos sexuais com ela, e com seu corpo infantil, ela não suportava sentir essa dor enorme, porém, aceitou em sua mente que era um preço justo, afinal isso era melhor que viver sem um lar.</p> },
      { paragraph: <p>Com isso, sua vivência na mansão se tornou muito menos prazerosa, não sentia mais vontade de brincar com os filhos do casal, e sua felicidade se baseava apenas em Flicko, o unico ser que a acalmava.</p> },
      { paragraph: <p>Até que um certo dia, cerca de um ano que ela passava por essa rotina, ela não conseguia encontrar o Flicko em lugar nenhum, ela perguntava aos funcionários e apenas desconversavam, até que ela ouviu certos sons vindos do quarto de um dos filhos do casal, e encontrou os dois irmãos sem nenhuma dó enfiando facas no corpo agora dilacerado de Flicko.</p> },
      { paragraph: <p>A menina não suportou isso e apenas caiu no chão, desabando em lagrimas, os meninos ficaram com um rosto confuso, e quando ela perguntou o que estavam fazendo, eles apenas disseram que estavam se divertindo.</p> },
      { paragraph: <p>Com isso, a garota desistiu, a unica criatura que sentia ficar do seu lado foi completamente destruída, ela agora sentia que sua existência era apenas dor.</p> },
      { paragraph: <p>Após mas alguns dias ela continuou a se manter na mesma rotina de abusos e dor constante, até que uma noite subiu no telhado da casa, completamente sem reação em seu rosto, apenas andou para frente, chegando a beirada, subiu o corrimão e apenas deixou a gravidade fazer seu trabalho.</p> },
      { paragraph: <p>Dentro da casa, o casal ouve um grande barulho fora da casa, então eles se armam para qualquer ameaça e vão para o lado de fora, e chegando ao lado da mansão vêem o corpo completamente coberto de sangue do que antes era apenas uma garota sorridente, o casal não apresenta nenhuma reação além de um rosto de desapontamento, e ordenam que os funcionarios peguem o corpo e o joguem na floresta ali perto, eles não poderiam permitir que ninguém descobrisse sobre isso.</p> },
      { paragraph: <p>Após isso, Raiya se encontra em completo choque agora se lembrando de tudo que havia se passado nessa casa, lagrimas apenas caem de seu rosto incessantemente.</p> },
      { paragraph: <p className="story_quote">- Sr. Ravenhart: 'Sabe, eu até ia perguntar o que aconteceu para você estar viva, mas não importa, fico feliz de ter meu brinquedinho de volta.'</p> },
      { paragraph: <p className="story_quote">- Raiya: '*(respiração ofegante)* Não... não não não, me ajuda por favor, eu preciso de você, ME AJUDA POR FAVOR ME AJUDA!'</p> },
      { paragraph: <p>Ela continua a gritar enquanto o Sr. Ravenhart começa a retirar suas roupas, se aproximou dela e com uma faca, cortou todas suas vestimentas, a deixando completamente nua, durante todo o tempo que estava ao lado de Laximit, sua forma humana nunca esteve nua, tanto que ela mesmo não sabia como ele era totalmente, e assim que ele a revelou, haviam diversos cortes em sua pele, cicatrizes em suas costas, braços e pernas, e em sua mente havia apenas um pensamento: "Eu não consigo me proteger disso, alguém por favor me salve."</p> },
      { paragraph: <p>E então, uma grande eletricidade percorre todo seu corpo, impedindo o Sr. Ravenhart de se aproximar dela, até que com um brilho, seu corpo desaparece completamente.</p> },
      { paragraph: <p>No quarto onde estava Laximit, a Sra. Ravenhart ainda estava cortando seu peito, até que se entediou e resolveu que iria cortar seus dedos, mas assim que estava prestes a fazer isso, um brilho forte surgiu na sala, e Raiya surgiu dele, vendo Laximit acorrentado, sem pensar foi em sua direção e com toda força que lhe restava, agarrou as correntes, as quebrando com muita dificuldade, assim libertando Laximit, e assim que ele desceu, ela se escondeu atrás dele, completamente apavorada.</p> },
      { paragraph: <p>Laximit pergunta o que aconteceu, e ela permanece agachada chorando e soluçando, quase perdendo o ar, vendo que ela não estava conseguindo falar, resolve usar um fetiço simples de leitura mental, encosta dois dedos em sua testa e consegue ver tudo aquilo que a atormentava, todo aquele ano de sofrimento, de abusos, a morte de Flicko, e mais importante, a morte de Raiya.</p> },
      { paragraph: <p>Com isso, Laximit não diz mais nenhuma palavra, apenas se levanta e começa a andar lentamente em direção a Sra. Ravenhart, nesse momento, o Sr. Ravenhart chega no quarto completamente nu.</p> },
      { paragraph: <p className="story_quote">- Sr. Ravenhart: 'SUA FILHA DA P###! EU NÃO SEI O QUE DIABOS VOCÊ FEZ, MAS VOCÊ NÃO VAI MAIS SAIR DESSE LUGAR, SE VOCÊ NÃO DECIDIR SE MATAR DESSA VEZ, EU MESMO VOU FAZER ESSE TRABALHO!'</p> },
      { paragraph: <p className="story_quote">- Sra. Ravenhart: 'O que houve? O que foi esse brilho quando ela surg-'</p> },
      { paragraph: <p className="story_quote">- Sr. Ravenhart: 'Espera, O QUE VOCÊ ESTÁ-'</p> },
      { paragraph: <p>Antes mesmo que pudesse terminar sua frase, Laximit coloca sua mão na lateral do rosto da Sra. Ravenhart, e a empurrando com toda sua força, ela voa em direção a parede, tendo seu crânio completamente esmagado com o impacto, deixando uma grande mancha de sangue na parede.</p> },
      { paragraph: <p>Assustado com o que acabou de ver, o Sr. Ravenhart saiu correndo dalí, até que de repente sente uma dor em sua nuca, e então... não sente mais nada, com o punho de Laximit atravessando sua cabeça, fazendo com que seu corpo caia no chão na mesma hora.</p> },
      { paragraph: <p>Após olhar um pouco para essa carcaça sem vida, ele retorna para a sala onde estava Raiya, que ainda estava agachada em um canto da sala totalmente em choque, Laximit então retira seu casaco e a cobre, e nesse momento Raiya olha ao seu redor, e percebendo que os Ravenhart estavam mortos, abraça Laximit e continua chorando.</p> },
      { paragraph: <p>Após ela se acalmar um pouco, ele se oferece pra carregar ela nas costas, e ela aceita sem pensar muito, e ambos começam a sair dessa prisão, no caminho, algumas celas chamam a atenção, e observando eles encontram mais algumas mulheres presas, algumas com vestimentas de empregadas, e eles então decidem libertar todas, inclusive em uma das celas acabam encontrando o corpo do que costumavam ser duas crianças totalmente cortadas e dilaceradas, e apenas olhando, Laximit e Raiya já entenderam o que aconteceu.</p> },
      { paragraph: <p>Chegando na área comum da mansão, eles encontram os outros empregados que se surpreendem com um visitante coberto de sangue e outra vestindo apenas um casaco, além das diversas mulheres os seguindo, então uma das empregadas se aproxima e pergunta o que aconteceu, Laximit apenas responde com um olhar raivoso para baixo, percebendo o que aconteceu, a mulher se ajoelha no chão.</p> },
      { paragraph: <p className="story_quote">- Empregada: 'Você...matou eles?'</p> },
      { paragraph: <p className="story_quote">- Laximit '...sim.'</p> },
      { paragraph: <p>Os empregados em volta ficam sem palavras, até que uma delas apenas diz:</p> },
      { paragraph: <p className="story_quote">- Empregada: 'Obrigada, muito muito muito obrigada! Todos nós estavamos presos aqui, sofrendo com esse inferno de vida, sem chance de ter nada melhor.'</p> },
      { paragraph: <p>Laximit e Raiya ficam ainda piores com isso, mas seguram sua raiva, ele então diz que vai notificar o governo de Novark para que eles possam oferecer algum apoio para eles, mas os empregados dizem que não tem problema, eles cuidavam de todas essas terras, caçavam, plantavam, e sonhavam com o dia que esse casal morresse, para que possam transformar aquela região em seu novo lar, afinal a grande maioria deles não tem para onde ir, então ao menos vão tentar viver por ali.</p> },
      { paragraph: <p>Após se despedir, todos em um clima sombrio e triste, Raiya entra novamente em Laximit, e eles partem de volta para Novark, e durante horas ambos não falaram uma sequer palavra.</p> },
      { paragraph: <p>Em cima do mesmo prédio que estavam antes da partida, todas as bestas estavam novamente lá, até que sentem que os dois estão retornando, e todos se levantam com um sorriso no rosto, que rapidamente se transforma em uma cara de surpresa quando vêem as roupas de Laximit rasgadas e diversos cortes em seu peito.</p> },
      { paragraph: <p>Fubuki se assusta e vai em direção a ele, nesse momento Raiya aparece, apenas vestido o casaco de Laximit, anda para o lado e se senta no chão, se cobrindo totalmente, Laximit faz um sinal com a cabeça para que Fubuki vá ficar junto de Raiya e assim ela faz.</p> },
      { paragraph: <p>Eles então perguntam o que aconteceu para eles estarem nessa situação, e utilizando mais um feitiço, sem uma palavra, coloca na mente de todos o que Raiya sofreu no passado e o desfecho do que aconteceu na mansão, deixando todos assustados e até mesmo surpreendendo Umbraza e Nagael, e todos decidem que vão manter silencio sobre isso durante aquele dia.</p> },
      { paragraph: <p>No dia seguinte, todos estão novamente relaxando no prédio, até que Laximit, em duvida do por quê Raiya de repente foi atraída a mansão, decide usar uma magia de Raio X nela, e percebe que em sua nuca haria uma pequena placa, ele então fala isso para ela, e ela aceita que eles tentem retirar, Fubuki, Hiyou e Nagael se aproximam para amenizar a dor e a curar assim que retirar, e usando uma pequena faca de gelo, eles cortam sua nuca e retiram um pequeno chip, então Nagael usa uma magia de cura para que seu pescoço volte ao normal.</p> },
      { paragraph: <p className="story_quote">- Laximit: 'Possivelmente aqueles desgraçados colocaram isso em todo mundo do castelo pra algo, e quando ativaram isso também afetou a Raiya...enfim.'</p> },
      { paragraph: <p>Ele então quebra o chip, sem preocupação com os outros empregados que nem mesmo devem saber o que ativa esse chip.</p> },
      { paragraph: <p className="story_quote">- Raiya: 'Laxi...'</p> },
      { paragraph: <p className="story_quote">- Laximit: 'Hm...'</p> },
      { paragraph: <p className="story_quote">- Raiya: 'Eu só te peço uma coisa, caso encontremos algo assim de novo...eu mesma vou matar eles.'</p> },
      { paragraph: <p>Sem nenhuma palavra, ele apenas acena com a cabeça, torcendo para que nunca encontre outro caso desse nível.</p> },
      
    ],
  },
  {
    storyId: "1032_1",
    title: "O Nascer das Chamas Infernais",
    ageRating: "16 Anos",
    tags: [
      "#laximit",
      "#lenora",
      "#seraphine",
      "#raiya", 
      "#aera",
      "#hiyou",
      "#fubuki",
      "#kouji",
      "#nagael",
      "#raiya",
      "#umbraza",
      "#drakzor",
      "#ardan",
      "#valthorn"
    ],
    storyYear: "1032",
    storyLink: "/historia/1032_1",
    links: [
      {paragraph: <p>Após uma árdua batalha contra <Link className="story_inside-link" to="/personagem/drakzor">Drakzor</Link>, <Link className="story_inside-link" to="/personagem/laximit">Laximit</Link> se encontra no chão, quase sem forças para lutar, com diversos ossos de seu corpo completamente despedaçados. <Link className="story_inside-link" to="/personagem/seraphine">Seraphine</Link> também se encontra sem forças, principalmente por conta do golpe que Drakzor lhe deu no abdômen.</p>},
      {paragraph: <p className="story_quote">- Laximit: '(ofegante) Ah, que- que merda, eu preciso logo levantar… vai… levanta!'</p>},
      {paragraph: <p>Laximit tenta então invocar as Botas Zephyr e as Manoplas Flamejantes para conseguir um mínimo de força para se levantar, mas, infelizmente, <Link className="story_inside-link" to="/personagem/aera">Aera</Link> e <Link className="story_inside-link" to="/personagem/hiyou">Hiyou</Link> estão completamente desacordados dentro dele, assim como todos os animais místicos.</p> },
      {paragraph: <p>Percebendo o esforço de Laximit para se levantar, Drakzor se aproxima lentamente. Assim que chega ao seu lado, ergue seu pé direito e esmaga Laximit novamente no chão, com a sola de seu pé sendo tão grande quanto o peito de Laximit, causando imensa dor em todo o seu corpo.</p> },
      {paragraph: <p>Laximit então cospe grandes quantidades de sangue, quase agonizando de dor, mal conseguindo se mexer. Percebendo isso, e usando o que resta de sua força, Seraphine puxa sua pistola e mira na cabeça de Drakzor. Porém, com o tremor de seu corpo, acaba errando e acertando seu ombro já desprotegido.</p> },
      {paragraph: <p className="story_quote">- Drakzor: 'Argh, sua filha da p###, você já testou demais minha paciência demais hoje, po###!'</p> },
      {paragraph: <p>Cheio de raiva, Drakzor abandona o corpo de Laximit e vai em direção a Seraphine. Enquanto isso, <Link className="story_inside-link" to="/personagem/lenora">Lenora</Link> corre para o campo de batalha, torcendo para que consiga chegar antes que algo de ruim aconteça.</p> },
      {paragraph: <p className="story_quote">- Seraphine: Seu desgraçado, eu ainda vou te matar seu-'</p> },
      {paragraph: <p>Nesse momento, Drakzor agarra a cabeça de Seraphine e a levanta. Ela tenta se soltar, agarrando e tentando bater no braço de Drakzor, sem sucesso, pois não tem forças suficientes.</p> },
      {paragraph: <p>Então, Drakzor abre um grande sorriso malicioso em seu rosto.</p> },
      {paragraph: <p className="story_quote">- Drakzor: “Olhando melhor agora, pode ter certeza vou aproveitar bastante seu corpo no inferno, sua vaga#####.”</p> },
      {paragraph: <p>Laximit, mal conseguindo mover os braços, tenta se arrastar até Drakzor e Seraphine. Nesse momento, Hiyou consegue acordar. Ao ver a cena, entra em choque, vendo Seraphine, uma de suas melhores amigas, a um passo de deixar este mundo.</p> },
      {paragraph: <p className="story_quote">- Laximit': “(com falta de ar) P…para…Sera…phine…n-não…por fa-.”</p> },
      {paragraph: <p>Antes mesmo que pudesse terminar sua frase, Drakzor fecha seu punho, esmagando o crânio de Seraphine. Laximit e Hiyou entram em completo choque, vendo sua amiga, sua parceira, uma parte essencial de suas vidas, com seu corpo sem vida pendurado na mão de Drakzor.</p> },
      {paragraph: <p>Nesse momento, Lenora chega e vê toda a cena, observando o estado em que Laximit se encontra, e também o destino de Seraphine.</p> },
      {paragraph: <p>Drakzor então solta o corpo morto de Seraphine, como se fosse um pedaço de lixo sem valor, apenas mais uma morte em sua longa lista.</p> },
      {paragraph: <p>E nesse momento... nada. Tanto Hiyou quanto Laximit não tinham pensamentos em suas mentes, não percebiam mais nada ao seu redor. Não havia mais céu, não havia mais prédios, não havia mais chão, apenas Seraphine.</p> },
      {paragraph: <p>Mas, mesmo assim, nem uma lágrima caiu de seus olhos. Ambos estavam completamente sem reação.</p> },
      {paragraph: <p>Então, no meio da escuridão, uma luz os alcança, mas, infelizmente, não era algo positivo.</p> },
      {paragraph: <p className="story_quote">- Laximit e Hiyou: “…ar…tar…”</p> },
      {paragraph: <p>Com uma voz rouca e fraca, eles começam a soltar sons de suas bocas, como se as mentes de ambos estivessem conectadas, perseguindo o mesmo objetivo.</p> },
      {paragraph: <p className="story_quote">- Laximit e Hiyou: “eu… vou…”</p> },
      {paragraph: <p>Drakzor se vira de costas, surpreendido ao ver o corpo de seu adversário em pé, mesmo com cada centímetro de seu corpo tremendo. O simples fato de estar de pé era algo completamente impossível aos seus olhos.</p> },
      {paragraph: <p className="story_quote">- Drakzor: “O que? Como você ainda consegue ficar em-”</p> },
      {paragraph: <p className="story_quote">- Laximit e Hiyou: “EU VOU TE MATAAAAAAR!!!”</p> },
      {paragraph: <p>Ele então solta um grito estridente e rouco, como se estivesse sacrificando as próprias cordas vocais para um último ato de raiva.</p> },
      {paragraph: <p>Assim que grita, seu corpo é completamente tomado por chamas extremamente concentradas, tão poderosas que, em questão de milissegundos, o chão ao redor dele já estava completamente queimado.</p> },
      {paragraph: <p>Drakzor, esperando mais uma transformação de fogo, fica atento para qualquer ataque, mas acaba sendo surpreendido.</p> },
      {paragraph: <p className="story_quote">- Drakzor: “N-não é possível, essa cor, como ele…”</p> },
      {paragraph: <p>As chamas de Laximit, então, sofrem uma metamorfose: o que antes era vermelho-vivo começa a se transformar em um tom claro de azul, o que surpreende Drakzor, que decide partir para cima dele.</p> },
      {paragraph: <p>Assim que Drakzor está quase alcançando Laximit, ele desaparece diante de seus olhos. Quando olha para trás, Drakzor percebe uma aparência completamente diferente: um corpo semelhante a uma sombra, com dois chifres azuis na testa, uma boca que parecia rasgar seu rosto de uma orelha à outra, formando um sorriso macabro com dentes pontiagudos, e olhos que pareciam sentir o medo em seu olhar. A raiva de Laximit e Hiyou havia dado à luz Ignis, o Demônio das Chamas.</p> },
      {paragraph: <p>Porém, havia algo a mais. Em suas mãos, Laximit segurava um braço decepado – o braço de Drakzor, que, em um piscar de olhos, havia sido arrancado de seu corpo.</p> },
      {paragraph: <p>Drakzor, decidido a fugir, começa a dar as costas, mas antes mesmo de dar outro passo, sente Laximit pulando em suas costas. O peso de Laximit, agora mil vezes maior, faz com que se agarrar à sua costas seja o suficiente para derrubá-lo no chão. Laximit aproxima seu rosto da cabeça de Drakzor, e ele pode ouvir a respiração falhada do inimigo, com vozes estridentes e graves ao mesmo tempo. Apesar de parecer tranquilo em relação à sua força, a respiração de Laximit entrega um corpo completamente exausto, movido apenas pela força do ódio.</p> },
      {paragraph: <p>Laximit então afasta seu rosto, puxa ar em seus pulmões e solta um grito de desespero tão alto que pode ser ouvido a centenas de quilômetros. De repente, o corpo de ambos é completamente coberto por um grande pilar de fogo azul. Laximit continua gritando, como se sua voz fosse a única a invocar aquelas chamas, enquanto Drakzor sente uma dor que nunca havia experimentado. Seu corpo queima com um ardor que nem a chama mais profunda do inferno poderia causar. Ele sente seu corpo se desfazendo, queimando, derretendo, e tudo o que pode fazer é agonizar de dor.</p> },
      {paragraph: <p>Cinco minutos se passam nesse estado, e então Laximit para de gritar. O pilar de fogo se dissipa, e Lenora, que estava observando tudo, se depara com o desfecho do ataque. Laximit, ainda em sua forma demoníaca, tremendo, com seus pés e mãos grudados nas costas de seu inimigo, olha para cima. Drakzor, completamente chamuscado, tem o corpo magro e corroído, mostrando que as chamas azuis não queimaram apenas sua pele e músculos, mas também todos os líquidos que permeavam seu corpo. Nesse momento, Drakzor era apenas uma casca, um pedaço de carne completamente sem vida.</p> },
      {paragraph: <p>Laximit olha para o lado e percebe a única pessoa que ainda está no local: Lenora. Antes mesmo que ela pudesse reagir, com sua imensa velocidade, Laximit já está na sua frente, saltando diretamente até ela. No entanto, antes que pudesse atacá-la, as chamas de seu corpo desaparecem, e ele retorna ao seu estado normal, caindo no chão completamente desacordado. Aquilo já havia sido o limite para ele, não havia mais forças em seu corpo para se mover.</p> },
    ],
  },
];