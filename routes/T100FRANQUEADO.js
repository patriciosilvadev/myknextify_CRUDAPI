const t100franqueado = (server, knex, errs, comum) => {
    var dados = [];
    var resultado = '';
    
    // Consultar todos os dados da tabela  
    server.get('/T100FRANQUEADO', (req, res, next) => {  
        knex('T100FRANQUEADO')
        .where('T100STATUS', 'A')
        .then((dados) => {
            res.send(dados); 
        }, next)
        .catch(function(error) {
            res.send(new errs.BadRequestError(error));
        });   
    });

    // Consultar ID
    server.get('/T100FRANQUEADO/consulta/:id', (req, res, next) => {
        var error = [];
        comum.ValidaConsulta(req, res, error);
        if (error.length == 0)
            comum.ConsultarReg(req, res, knex, errs, 'T100FRANQUEADO', 'T100ID', next);     
    }); 

    //Alterar dados
    server.put('/T100FRANQUEADO/alteracao/:id', (req, res, next) => { 
        var error = [];
        comum.ValidaAlteracao(req, res, next);
        if (error.length == 0)
            comum.AlterarReg(req, res, knex, errs, 'T100FRANQUEADO', 'T100ID', next);               
    });
  
    //Deletar dados 
    server.del('/T100FRANQUEADO/exclusao/:id', (req, res, next) => {  
        var error = []; 
        comum.ValidaExclusao(req, res, next); 
        if (error.length == 0)   
            comum.DeletarReg(req, res, knex, errs, 'T100FRANQUEADO', 'T100ID', next);    
    });
  
    //Criar novo registro 
    server.post('/T100FRANQUEADO/inclusao', (req, res, next) => {
        var error = [];   
        comum.ValidaInclusao(req, res, next); 
        if (error.length == 0) 
            comum.IncluirReg(req, res, knex, errs, 'T100FRANQUEADO', next); 
    });          
}

module.exports = t100franqueado;