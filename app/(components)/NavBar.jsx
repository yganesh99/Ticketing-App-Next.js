import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
	return (
		<nav className='flex justify-between p-4 bg-gray-900'>
			<div className='flex items-center space-x-4'>
				<Link href='/'>
					<FontAwesomeIcon
						icon={faHome}
						className='icon'
					></FontAwesomeIcon>
				</Link>
				<Link href='/TicketPage/new'>
					<FontAwesomeIcon
						icon={faTicket}
						className='icon'
					></FontAwesomeIcon>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
