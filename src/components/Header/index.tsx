import { Link } from 'react-router-dom'
import {Menu  , Image, Button , Icon} from 'semantic-ui-react'
import Picc from "../../assets/images/pic.png"

type Props = {}

export default function Header({}: Props) {
  return (
	<Menu secondary pointing>
        <Image src = {Picc} width = {60}/>
		<Menu.Item style = {{fontSize : 24}} as = {Link} to = "/">MAIFONE</Menu.Item>
		<Menu.Item position='right'>
		<Button as = {Link} to = "/contacts/create" primary basic icon>
			<Icon name = "add"></Icon>
			Create Contact 
		</Button>	
		</Menu.Item>
		<Menu.Item>
			<Button  color = "red" basic icon>
				<Icon name ="log out"></Icon>
				Logout
			</Button>
			
		</Menu.Item>
		
	</Menu>
	
  )
}