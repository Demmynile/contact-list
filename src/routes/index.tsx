import RegisterComponent from "../containers/Register"
import LoginComponent from "../containers/Login"
import ContactComponent from "../containers/Contacts"
import CreateContactComponent from "../containers/CreateContact"




export const routes = [
    {
		path : '/auth/register',
		component : RegisterComponent,
		title : "Register"
	},
	{
		path : '/auth/login',
		component : LoginComponent,
		title : "Login"
	},
	{
		path : '/',
		component : ContactComponent,
		title : "Contacts"
	},
	{
		path : '/contacts/create',
		component : CreateContactComponent,
		title : "Register"

	}

]