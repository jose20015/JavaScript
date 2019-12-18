
class Aluno
{
	constructor(nome, ra, curso, nota1, nota2,nota3){
		this.nome = nome;
		this.ra = ra;
		this.curso =curso;
		this.nota1 = nota1;
		this.nota2 = nota2;
		this.nota3 = nota3;
	}

	Pre_Dados_do_aluno()
	{
		console.log("Pré Ficha do Aluno");
		console.log("Nome: "+ this.nome);
		console.log("RA: "+this.ra);
		console.log("Curso: "+this.curso);
	} 

	Dados_gerais_do_aluno()
	{
		console.log("Ficha do Aluno");
		console.log("Nome: "+ this.nome);
		console.log("RA: "+this.ra);
		console.log("Curso: "+this.curso);
		console.log("");
		console.log("Notas do Aluno");
		console.log("Nota1: "+ this.nota1);
		console.log("Nota1: "+ this.nota2);
		console.log("Nota1: "+ this.nota3);

		let media_final;
		media_final = ( this.nota1 + this.nota2 + this.nota3 )/3;

		if(media_final >= 6){
			console.log("Aluno Aprovado, média "+ media_final);
		}
		else if( media_final >= 5 && media_final < 6 ){
			console.log("Aluno em Recuperação, média "+ media_final);
		}
		else{
			console.log("Sua média é " + media_final + " Favor Efetuar uma nova matricula");
		}
	} 
}

aluno = new Aluno();

aluno.nome = prompt("Nome do aluno: ");
aluno.ra = prompt("RA do aluno: ");
aluno.curso = prompt("Curso do aluno: ");

op = confirm("Deseja informar as 3 notas: ?");

if(op == true )
{
	
	aluno.nota1 = parseInt(prompt("Nota1: "));
	aluno.nota2 = parseInt(prompt("Nota2: "));
	aluno.nota3 = parseInt(prompt("nota3: "));
	aluno.Dados_gerais_do_aluno(); 
}
else
{
	aluno.Pre_Dados_do_aluno();
}
