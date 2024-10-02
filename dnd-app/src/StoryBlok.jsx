import React from 'react';
import useStoryblok from './hooks/useStoryblok';

const StoryBlok = () => {
	const { stories} = useStoryblok();

	return ( 
		<div>
			<h1>StoryBlok</h1>
			<h3>stories</h3>
			<ul className="grid grid-cols-2 gap-6">
				{stories && stories?.map((category) => {
					if (category?.content) {
						return (
							<li
								// href={linkResolver(category)}
								key={category.uuid}
								className="rounded-2xl border border-gray-20 p-6 duration-150 hover:border-gray-40 hover:bg-gray-10"
							>
								{/* <StoryblokImage className="h-8 w-8 object-contain" image={category.content.icon} /> */}
								<img src={category?.content?.icon} alt="icon" />

								<h3 className="mt-2 text-lg font-medium">{category?.content?.title}</h3>
								<p className="mt-2 text-sm">{category?.content?.subtitle}</p>
							</li>
						);
					}
				})}
			</ul>
			{/* {stories && stories.data.stories.map((story) => (
					<li key={story.id}>
						{story.name}
					</li>
				))} */}
			<p>more info</p>
		</div>
	);
};
 
export default StoryBlok;