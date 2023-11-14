import React from 'react';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
	return (
		<div className='flex flex-col bg-amber-400 hover:bg-amber-600 rounded-md shadow-lg p-3 m-2'>
			<div className='flex mb-3'>
				<PriorityDisplay />
				<div className='ml-auto'>
					<DeleteBlock />
				</div>
			</div>
			<h4 className='text-white'>Ticket Title</h4>
			<hr className='h-px border-0 bg-cyan-950 mb-2'></hr>
			<p className='whitespace-pre-wrap text-white'>
				Ticket Description!
			</p>
			<ProgressDisplay />
			<StatusDisplay />
		</div>
	);
};

export default TicketCard;
