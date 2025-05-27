/* exported Calc */
const Calc = {
    qualificadores: {
        natureza: ['Culpa Leve', 'Culpa Grave', 'Dolo'],
        gravidade: ['Baixa', 'Média', 'Alta'], 
        dano: ['Leve', 'Médio', 'Grave'], 
        repercussao: ['Baixa', 'Média', 'Grave'] 
    },

    enquadramentos: [
        { descricao: "Lei Nº 5.810, Art. 177, I - DESCUMPRIMENTO DO DEVER: assiduidade e pontualidade;", pena: "Repreensão" },
        { descricao: "Lei Nº 5.810, Art. 177, II - DESCUMPRIMENTO DO DEVER: urbanidade;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 177, III - DESCUMPRIMENTO DO DEVER: discrição;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 177, IV - DESCUMPRIMENTO DO DEVER: obediência às ordens superiores, exceto quando manifestamente ilegais;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 177, V - DESCUMPRIMENTO DO DEVER: exercício pessoal das atribuições;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 177, VI - DESCUMPRIMENTO DO DEVER: observância aos princípios éticos, morais, às leis e regulamentos;", pena: "Repreensão" },
        { descricao: "Lei Nº 5.810, Art. 177, VII - DESCUMPRIMENTO DO DEVER: atualização de seus dados pessoais e de seus dependentes;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 177, VIII - DESCUMPRIMENTO DO DEVER: representação contra as ordens manifestamente ilegais e contra irregularidades;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 177, IX - DESCUMPRIMENTO DO DEVER: atender com presteza a) às requisições para a defesa judicial ou extrajudicial do Estado;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 177, IX - DESCUMPRIMENTO DO DEVER: atender com presteza b) às informações, documentos e providências solicitadas por autoridades judiciárias ou administrativas;", pena: "Repreensão" },
        { descricao: "Lei Nº 5.810, Art. 177, IX - DESCUMPRIMENTO DO DEVER: atender com presteza c) à expedição de certidões para a defesa de direitos, para a argüição de ilegalidade ou abuso de autoridade;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, I - ACUMULAR INCONSTITUCIONALMENTE CARGOS OU EMPREGOS NA ADMINISTRAÇÃO PÚBLICA;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, II - REVELAR FATO DE QUE TEM CIÊNCIA EM RAZÃO DO CARGO, E QUE DEVE PERMANECER EM SIGILO, OU FACILITAR SUA REVELAÇÃO;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, III - PLEITEAR COMO INTERMEDIÁRIO OU PROCURADOR JUNTO AO SERVIÇO PÚBLICO, EXCETO QUANDO SE TRATAR DE INTERESSE DO CÔNJUGE OU DEPENDENTE", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, IV - DEIXAR DE COMPARECER AO SERVIÇO, SEM CAUSA JUSTIFICADA, POR 30 (TRINTA) DIAS CONSECUTIVOS;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, V - VALER-SE DO EXERCÍCIO DO CARGO PARA AUFERIR OU TENTAR AUFERIR PROVEITO PESSOAL OU DE OUTREM, EM DETRIMENTO DA DIGNIDADE DA FUNÇÃO;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, VI - COMETER ENCARGO LEGÍTIMO DE SERVIDOR PÚBLICO À PESSOA ESTRANHA À REPARTIÇÃO, FORA DOS CASOS PREVISTOS EM LEI;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, VII, A) - EXERCER ATIVIDADE EMPRESARIAL DURANTE O HORÁRIO DE EXPEDIENTE;", pena: "Suspensão1" }, 
        { descricao: "Lei Nº 5.810, Art. 178, VII, B) - EXERCER ATIVIDADE EMPRESARIAL NO RECINTO DA REPARTIÇÃO;", pena: "Suspensão1" }, 
        { descricao: "Lei Nº 5.810, Art. 178, VII, C) - EXERCER ATIVIDADE EMPRESARIAL UTILIZANDO RECURSOS PÚBLICOS;", pena: "Suspensão1" }, 
        { descricao: "Lei Nº 5.810, Art. 178, VII, D) - EXERCER ATIVIDADE EMPRESARIAL EM CONFLITO DE INTERESSES COM A ADMINISTRAÇÃO;", pena: "Suspensão1" }, 
        { descricao: "Lei Nº 5.810, Art. 178, VIII - ACEITAR CONTRATOS COM A ADMINISTRAÇÃO ESTADUAL, QUANDO VEDADO EM LEI OU REGULAMENTO;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, IX - PARTICIPAR DA GERÊNCIA OU ADMINISTRAÇÃO DE ASSOCIAÇÃO OU SOCIEDADE SUBVENCIONADA PELO ESTADO, EXCETO ENTIDADES COMUNITÁRIAS E ASSOCIAÇÃO PROFISSIONAL OU SINDICATO;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, X - TRATAR DE INTERESSES PARTICULARES OU DESEMPENHAR ATIVIDADE ESTRANHA AO CARGO, NO RECINTO DA REPARTIÇÃO;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XI - REFERIR-SE, DE MODO OFENSIVO, A SERVIDOR PÚBLICO, A ADMINISTRADO E A ATO DA ADMINISTRAÇÃO;", pena: "Suspensão1" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XII - UTILIZAR-SE DO ANONIMATO, OU DE PROVAS OBTIDAS ILICITAMENTE;", pena: "Suspensão1" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XIII - PERMUTAR OU AUSENTAR-SE DE SERVIÇO, SEM EXPRESSA AUTORIZAÇÃO;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XIV - OMITIR-SE NO ZELO E CONSERVAÇÃO DOS BENS E DOCUMENTOS PÚBLICOS;", pena: "Suspensão1" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XV - DESRESPEITAR OU PROCRASTINAR O CUMPRIMENTO DE DECISÃO JUDICIAL OU ADMINISTRATIVA;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XVI - DEIXAR, SEM JUSTA CAUSA, DE OBSERVAR PRAZOS LEGAIS ADMINISTRATIVOS OU JUDICIAIS;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XVII - PRATICAR ATO LESIVO AO PATRIMÔNIO ESTADUAL;", pena: "Suspensão1" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XVIII - SOLICITAR, ACEITAR OU EXIGIR VANTAGEM INDEVIDA PELA ABSTENÇÃO OU PRÁTICA REGULAR DE ATO DE OFÍCIO;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XIX - ACEITAR REPRESENTAÇÃO DE ESTADO ESTRANGEIRO, SEM AUTORIZAÇÃO LEGAL;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XX - EXERCER ATRIBUIÇÕES SOB AS ORDENS IMEDIATAS DE PARENTES ATÉ O SEGUNDO GRAU, SALVO EM CARGO COMISSIONADO;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XXI - PRATICAR ATOS, QUE SEJAM TAMBÉM TIPIFICADOS EM LEI COMO CRIME, VITIMANDO A ADMINISTRAÇÃO PÚBLICA, SEU PATRIMÔNIO OU SERVIDORES NO EXERCÍCIO DE SUAS FUNÇÕES;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XXII - EXERCER A ADVOCACIA FORA DAS ATRIBUIÇÕES INSTITUCIONAIS, SE OCUPANTE DO CARGO INCOMPATÍVEL;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 178, XXIII - RETARDAR, INJUSTIFICADAMENTE, A NOMEAÇÃO DE CLASSIFICADO EM CONCURSO PÚBLICO;", pena: "Repreensão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, I - Prática de atos também tipificados em lei como crime, vitimando a Administração Pública, seu patrimônio, o administrado ou servidores no exercício de suas funções;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, II - Abandono de cargo;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, III - Inassiduidade habitual, configurada por faltas ao serviço, sem causa justificada, por 60 (sessenta) dias, intercaladamente, no período de 12 (doze) meses;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, IV - Prática de ato tipificado como improbidade administrativa;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, V - Incontinência Pública e conduta escandalosa, na repartição;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, VI - Insubordinação grave em serviço;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, VII - ofensa física, em serviço, a servidor ou a particular, salvo em legítima defesa própria ou de outrem;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, VIII - aplicação irregular de dinheiros públicos;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, IX - Violação de sigilo profissional, observado o disposto no § 2º do art. 177;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, X - Lesão aos cofres públicos e dilapidação do patrimônio estadual;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XI - Corrupção;", pena: "Demissão" },
        { descricao: "Lei Nº 5.810, Art. 190, XII - Acumulação ilegal de cargos, empregos ou funções públicas;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XIII - Lograr proveito pessoal ou de outrem, valendo-se do cargo, em detrimento da dignidade da função pública;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XIV, A) - Exercício da atividade empresarial durante o horário de expediente;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XIV, B) - Exercício da atividade empresarial no recinto da repartição;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XIV, C) - Exercício da atividade empresarial utilizando recursos públicos;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XIV, D) - Exercício da atividade empresarial em conflito de interesses com a administração;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XV - Atuação, como procurador ou intermediário, junto a repartições públicas, salvo quando se tratar de benefícios previdenciários ou assistenciais a parentes até o segundo grau, e de cônjuge ou companheiro;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XVI - Recebimento de propina, comissão, presente ou vantagem de qualquer espécie, em razão de suas atribuições;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XVII - Aceitação de comissão, emprego ou pensão de estado estrangeiro;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XVIII - Prática de usura sob qualquer de suas formas;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XIX - Procedimento desidioso;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XX - Utilização de pessoal ou recursos materiais de repartição em serviços ou atividades particulares;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XXI - Prática de assédio moral, assédio sexual ou discriminação;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XXII - Perda da habilitação profissional que seja requisito do seu cargo;", pena: "Demissão" }, 
        { descricao: "Lei Nº 5.810, Art. 190, XXIII - Cometer encargo legítimo de servidor público à pessoa estranha à repartição, fora dos casos previstos em lei.", pena: "Demissão" },
    ], 
        

    init: function () {
        Calc.construirEnquadramentos();
        Calc.inicializarTooltips();
    },

    inicializarTooltips: function () {
        let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    },

    construirCheckboxSelecaoEnquadramento: function (value) {
        return `<input type="checkbox" class="form-check-input" value="${value}" onchange="Calc.onClickEnquadramento()"></input>`;
    },

    onClickEnquadramento: function () {
        let infoEnquadramentos = $("#infoEnquadramentos");
        let inputsChecked = $('#tableEnquadramento tbody input:checked');

        if (inputsChecked.length == 1) {
            infoEnquadramentos.html("Enquadramentos (1 selecionado)");
        } else {
            infoEnquadramentos.html(`Enquadramentos (${inputsChecked.length} selecionados)`);
        }

        Calc.atualizarCalculos();
    },

    apagarSelecaoEnquadramentos: function () {
        $("#tableEnquadramento tbody input").prop("checked", false);

        Calc.onClickEnquadramento();
    },

    resetarCriteriosQueAumentamGrau: function () {
        $("#tableCriteriosQueAumentam tbody input").val(0);

        $("#naturezaPontos").val(1);
        $("#gravidadePontos").val(1);
        $("#repercussaoPontos").val(1);

        $("input[name='natureza']").val(1);
        $("input[name='gravidade']").val(1);
        $("input[name='repercussao']").val(1);

        Calc.atualizarQualificador("natureza", 1);
        Calc.atualizarQualificador("gravidade", 1);
        Calc.atualizarQualificador("dano", 0);
        Calc.atualizarQualificador("repercussao", 1);

        Calc.atualizarCalculos();
    },

    resetarCriteriosQueDiminuem: function () {
        $("#tableCriteriosQueDiminuem tbody input").val(0);

        Calc.atualizarCalculos();
    },

    construirEnquadramentos: function () {
        let tableBody = $('#tableEnquadramento tbody');
        Calc.enquadramentos.forEach((e, i) => {
            tableBody.append($(`<tr>
                        <td>${Calc.construirCheckboxSelecaoEnquadramento(i)}</td>
                        <td>${e.descricao}</td>
                    </tr>`));
        });
    },

    atualizarCalculos: function () {
        let inputs = $('#tableEnquadramento tbody tr td:nth-child(1) input:checked');

        if (inputs.length > 0) {
            Calc.calcular(inputs);
        } else {
            $('#areaParametros').hide();
            $('#areaResultado').html(`<h3>Selecione os enquadramentos para início dos cálculos</h3>`); // Corrigido: início, cálculos
        }
    },

    calcular: function (inputs) {
        let existeDemissao = false;
        let existeSuspensao1 = false;
        let existeSuspensao2 = false;
        let existeAdvertencia = false;

        let reincidencia = $('#reincidencia').prop('checked');
        let penalidadeVigente = $('#penalidadeVigente').prop('checked');
        let apenadoDisciplinarmenteUltimos12Meses = $('#apenadoDisciplinarmenteUltimos12Meses').prop('checked');
        let tacPendenteCumprimento = $('#tacPendenteCumprimento').prop('checked');

        inputs.each((index, input) => {
            let enquadramento = Calc.enquadramentos[$(input).val()];
            existeDemissao = existeDemissao || enquadramento.pena == "Demissão"; 
            existeSuspensao1 = existeSuspensao1 || enquadramento.pena == "Suspensão1"; 
            existeSuspensao2 = existeSuspensao2 || enquadramento.pena == "Suspensão2"; 
            existeAdvertencia = existeAdvertencia || enquadramento.pena == "Repreensão"; 
        });

        let config = {
            demissao: existeDemissao, suspensao1: existeSuspensao1, suspensao2: existeSuspensao2, advertencia: existeAdvertencia,
            reincidencia: reincidencia, penalidadeVigente: penalidadeVigente, apenadoDisciplinarmenteUltimos12Meses: apenadoDisciplinarmenteUltimos12Meses, tacPendenteCumprimento: tacPendenteCumprimento
        };

        Calc.controlarExibicaoParametros(config.demissao);
        Calc.calcularPena(config);
        Calc.inicializarTooltips();
    },

    controlarExibicaoParametros: function (demissao) {
        if (!demissao) {
            $('#areaParametros').show();
        } else {
            $('#areaParametros').hide();
        }
    },

    calcularPena: function (config) {
        let resultado = "";

        if (config.demissao) {
            resultado = "<h3 class='text-warning'>Demissão/ Destituição de Cargo em Comissão Ou Função Gratificada/ Cassação de Aposentadoria ou Disponibilidade/ Conversão da Exoneração a Pedido em Demissão/ Conversão do Distrato de Servidor Temporário em Demissão e</h3>"; 
            resultado += "<h3 class='text-danger'>Celebração de TAD impossível</h3>"; 
        } else {
            resultado = Calc.calcularAdvertenciaOuSuspensao(config);
        }

        $('#areaResultado .card-body').html(resultado);
    },

    calcularAdvertenciaOuSuspensao: function (config) {
        let ptsNatureza = parseInt($('#naturezaPontos').val());
        let ptsGravidade = parseInt($('#gravidadePontos').val());
        let ptsDano = parseInt($('#danoPontos').val());
        let ptsRepercussao = parseInt($('#repercussaoPontos').val());
        let ptsAtenuantes = parseInt($('#atenuantesPontos').val());
        let ptsAgravantes = parseInt($('#agravantesPontos').val());
        let ptsBonsAntecedentes = parseInt($('#bonsAntecedentesPontos').val());
        let ptsMausAntecedentes = parseInt($('#mausAntecedentesPontos').val());

        let graus = ptsNatureza + ptsGravidade + ptsDano + ptsRepercussao - ptsAtenuantes + ptsAgravantes - ptsBonsAntecedentes + ptsMausAntecedentes;

        $('#totalGeral').html(graus);

        if (config.suspensao1) {
            return Calc.calcularCasoSuspensao1(config, graus);
        } else {
            return Calc.calcularCasoGeral(config, graus);
        }
    },

    tacNaoPodeSerCelebrado: function (diasSuspensao) {
        return diasSuspensao > 30;
    },

    calcularMensagemTAC: function (config, diasSuspensao) {
        let retorno = "";

        if (Calc.tacNaoPodeSerCelebrado(diasSuspensao) || config.reincidencia || config.penalidadeVigente || config.apenadoDisciplinarmenteUltimos12Meses || config.tacPendenteCumprimento) {
            retorno = `<h3><span class="text-danger">Celebração de TAD impossível</span></h3>`; // Corrigido: Celebração, impossível
        } else {
            retorno = `<h3><span class="text-success">Celebração de TAD possível</span></h3>`; // Corrigido: Celebração, possível
        }

        retorno += `<p style="text-align: center; font-size: 0.9rem;" class="mt-2">A celebração de TAD deve observar as condições estabelecidas na PORTARIA NORMATIVA CGU Nº 27, DE 11 DE OUTUBRO DE 2022. 
        Clique <a href='https://in.gov.br/en/web/dou/-/portaria-normativa-cgu-n-27-de-11-de-outubro-de-2022-435868760' target='blank'>aqui</a> para acessar.<p>`; // Corrigido: celebração, condições, Nº

        return retorno;
    },

    calcularCasoSuspensao1: function (config, graus) {
        let dias = 5 * graus / 7;
        dias = (dias > 1) ? dias : 1;
        dias = Math.floor(dias);

        let retorno = "";

        retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right"><span class="text-warning">Suspensão de ${dias} dia(s)</span></h3>`; // Corrigido: Suspensão
        retorno += Calc.calcularMensagemTAC(config, dias);

        return retorno;
    },

    calcularCasoGeral: function (config, graus) {
        let diasSuspensao2 = graus / 7;
        diasSuspensao2 = (diasSuspensao2 > 1) ? diasSuspensao2 : 1;
        diasSuspensao2 = Math.floor(diasSuspensao2);

        let diasCasoGeral = graus - 36;

        return Calc.calcularCasosGeral(config, graus, diasSuspensao2, diasCasoGeral);
    },

    calcularCasosGeral: function (config, graus, diasSuspensao2, diasCasoGeral) {
        let retorno = "";

        if (config.suspensao2) {
            if (config.advertencia) {
                retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right"><span class="text-warning">Suspensão de ${diasSuspensao2 > diasCasoGeral ? diasSuspensao2 : diasCasoGeral} dia(s)</span></h3>`; 
                retorno += Calc.calcularMensagemTAC(config, diasSuspensao2 > diasCasoGeral ? diasSuspensao2 : diasCasoGeral);
            } else {
                retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right"><span class="text-warning">Suspensão de ${diasSuspensao2} dia(s)</span></h3>`; // Corrigido: Suspensão
                retorno += Calc.calcularMensagemTAC(config, diasSuspensao2);
            }

            return retorno;
        }

        if (graus <= 36) {
            if (config.reincidencia) {
                retorno = `<h3 title="Grau: ${graus}. Penalidade convertida de Repreensão para Suspensão devido a reincidência." data-bs-toggle="tooltip" data-bs-placement="right"><span class="text-warning">Suspensão de 1 dia</span></h3>`; 
                retorno += Calc.calcularMensagemTAC(config, 1);
            } else {
                retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right"><span class="text-info">Repreensão</span></h3>`; 
                retorno += Calc.calcularMensagemTAC(config, 0);
            }
        } else {
            retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right"><span class="text-warning">Suspensão de ${graus - 36} dia(s)</span></h3>`; 
            retorno += Calc.calcularMensagemTAC(config, graus - 36);
        }

        return retorno;
    },

    onInputRange: function (prefixo, valor) {
        $(`#${prefixo}Pontos`).val(valor);

        Calc.atualizarQualificador(prefixo, parseInt(valor));
        Calc.atualizarCalculos();
    },

    atualizarQualificador: function (prefixo, valor) {
        if (prefixo == "natureza" || prefixo == "gravidade" || prefixo == "dano" || prefixo == "repercussao") {
            if (15 <= valor && valor <= 21) {
                $(`#${prefixo}Circulo`).removeClass("circulo-qualificador-leve circulo-qualificador-medio circulo-qualificador-grave").addClass("circulo-qualificador-grave");
                $(`#${prefixo}Qualificador`).html(Calc.qualificadores[prefixo][2]);
            } else if (8 <= valor && valor <= 14) {
                $(`#${prefixo}Circulo`).removeClass("circulo-qualificador-leve circulo-qualificador-medio circulo-qualificador-grave").addClass("circulo-qualificador-medio");
                $(`#${prefixo}Qualificador`).html(Calc.qualificadores[prefixo][1]);
            } else {
                $(`#${prefixo}Circulo`).removeClass("circulo-qualificador-leve circulo-qualificador-medio circulo-qualificador-grave").addClass("circulo-qualificador-leve");
                $(`#${prefixo}Qualificador`).html(Calc.qualificadores[prefixo][0]);
            }
        }
    },

    onChangeTotal: function (name, input) {
        input.value = Math.floor(input.value);

        if (parseInt(input.value) < parseInt(input.min)) {
            input.value = input.min;
        } else if (parseInt(input.value) > parseInt(input.max)) {
            input.value = input.max
        }

        $(`input[name="${name}"]`).val(input.value);

        Calc.atualizarQualificador(name, parseInt(input.value));
        Calc.atualizarCalculos();
    }
};