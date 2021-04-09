import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../shared/usuario';
import { DadosEndereco } from './../../shared/dadosEndereco';
import { CrudService } from './../../services/crud.service';
@Component({
  selector: 'app-cadastra-cliente',
  templateUrl: './cadastra-cliente.component.html',
  styleUrls: ['./cadastra-cliente.component.scss']
})
export class CadastraClienteComponent implements OnInit {

  constructor(private fb: FormBuilder, private crud: CrudService) { }

  ngOnInit(): void {
    this.montaForm();
  }

  formCliente: FormGroup;
  cliente: Usuario;

  montaForm(){
    this.formCliente = this.fb.group({
      nome: ['', [Validators.required]],
      sobrenome: [''],
      tipo: false,
      cpf: ['', [Validators.min(11), Validators.max(11)]],
      cnpj: ['', [Validators.min(14), Validators.max(14)]],
      inscricaoEstadual: ['', [Validators.min(6), Validators.max(9)]],
      razaoSocial: '',
      endereco: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      pais: ['Brasil', [Validators.required]],
      telefone: ['', [Validators.required]],
      whatsapp: false,
      celular: '',
      email: ['', [Validators.email]],
      obs: ''
    });  
  }

  get radioUsuario(){
    return this.formCliente.get('usuarioFinal').value;
  }

  get radioEmpresa(){
    return this.formCliente.get('empresa').value;
  }

  alteraValorInputRadio(event){
    
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);

    if(id === 'empresa'){
      this.formCliente.get('empresa').patchValue(true);
      this.formCliente.get('usuarioFinal').patchValue(false);
    }else{
      if(id === 'usuarioFinal'){
        this.formCliente.get('empresa').patchValue(false);
        this.formCliente.get('usuarioFinal').patchValue(true);
      } else {
        return;
      }
    }

  }

  enviaForm(){
    this.cliente = this.formCliente.value;
    
    this.crud.addData('/usuarios/listaUsuarios.php', this.cliente).subscribe((res) => {
      console.log(res);
    }, err => {
      console.error(err);
    })
  }

  consultaCEP(){
    let cep = this.formCliente.get('cep').value;

    if(cep.length === 8){
      
      let cep = this.formCliente.get('cep').value;
      let url = `http://viacep.com.br/ws/${cep}/json/`;

      this.crud.getCep(url).subscribe((res) => {
        
        this.colocaDadosEnderecoForm(res);
      }, err => {
        console.error(err);
      });


    }

  }

  colocaDadosEnderecoForm(dados: DadosEndereco){

    let endereco = dados.logradouro;
    let bairro = dados.bairro;
    let ddd = dados.ddd;
    let cidade = dados.localidade;
    let cep = dados.cep;
    let estado = dados.uf;

    this.formCliente.get('endereco').patchValue(endereco);
    this.formCliente.get('bairro').patchValue(bairro);
    this.formCliente.get('cidade').patchValue(cidade);
    this.formCliente.get('estado').patchValue(estado);


  }

}
