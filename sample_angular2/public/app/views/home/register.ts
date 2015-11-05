import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {RegisterModel} from './register_model.ts';
import {CheckListBox} from '../../directives/checklistbox.ts';
import {RadioListBox} from '../../directives/radiolistbox.ts';
@Component({
  selector: 'register-form',
  templateUrl:'../public/app/views/home/register.html',
  directives:[FORM_DIRECTIVES,CORE_DIRECTIVES,CheckListBox,RadioListBox],
  viewProviders: [HTTP_PROVIDERS]
})

export class RegisterComponent {
 	
 	model =
 	 {
 	 	username:"",
 	 	password:"",
 	 	confirm:"",
 	 	title:"",
 	 	firstName:"",
 	 	lastName:"",
 	 	province:"",
 	 	amphur:"",
 	 	marital:"Single",
 	 	gender:"G01",
 	 	roles:[],
 	 	hobbies:[]
 	 };
 	 test:string;
 	 roles=["Super Admin","Admin","Power User","User","Guest"];
 	 hobbies=
 	 [
 	 	{code:"H01",text:"Play Music"},
 	 	{code:"H02",text:"Play Sport"},
 	 	{code:"H03",text:"Reading"},
 	 	{code:"H04",text:"Drawing"},
 	 	{code:"H05",text:"Play Internet"}
 	 ]
 	 maritals=["Single","Maridge","M3","M4"];
 	 genders=
 	 [
 	 	{code:"G01",text:"Male"},
 	 	{code:"G02",text:"Female"},
 	 	{code:"G03",text:"PrettyMale"},
 	 	{code:"G04",text:"HansomeFemale"}
 	 ];
 	 titles=[];
 	 provinces=[];
 	 amphurs=[];
 	 http:Http;
 	constructor(private http: Http)
 	{
 				this.http=http;
 				http.get("../master/title")
 				.map(r => r.json())
 				.subscribe(titles => this.titles = titles);
 				
 				http.get("../master/province")
 				.map(r=>r.json())
 				.subscribe(provinces=>this.provinces=provinces);

 	}
 	provinceChange()
 	{
 		
 		alert(this.model.province);
 			this.http.get("../master/amphur?province_id="+this.model.province)
 			.map(r=>r.json())
 			.subscribe(amphurs=>this.amphurs=amphurs);

 	}
 	save()
 	{
 		this.http.post('./register_save', JSON.stringify(this.model), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
 		.map(r => r.json())
 		.subscribe(res=>this.res=res);

 	}
}

bootstrap(RegisterComponent);

