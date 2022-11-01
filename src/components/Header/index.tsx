import {Menu  , Image} from 'semantic-ui-react'
import logo from "../assets/images/logo192.png"

type Props = {}

export default function Header({}: Props) {
  return (
	<Menu secondary >
        <Image src = {logo} />
		<Menu.Item>MAIFONE</Menu.Item>
		<Menu.Item position='right'>Create Contact</Menu.Item>
		<Menu.Item>Logout</Menu.Item>
		
	</Menu>
	
  )
}