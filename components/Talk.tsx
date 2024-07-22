import {
	ComponentProps,
	getParameterAttributes,
	registerUniformComponent,
} from "@uniformdev/canvas-react";
import React from "react";

export type TalkProps = ComponentProps<{
	title: string;
	description: string;
	audience: string;
}>;

export const Talk = ({
	title,
	description,
	audience,
	component,
}: TalkProps) => {
	const audienceName = audience ?? "Everyone";

	return (
		<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow space-y-2 pt-2">
			<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden">
				<div className="mt-3 mb-3 flex items-center justify-start">
					<AudienceLabel audienceName={audienceName} />
				</div>
			</div>
			<a href="#" className="flex flex-wrap no-underline hover:no-underline">
				<div
					{...getParameterAttributes({
						component,
						id: "title",
						placeholder: "Talk title",
					})}
					className="w-full font-bold text-xl text-gray-800 px-6"
				>
					{title}
				</div>
			</a>
			<div
				{...getParameterAttributes({
					component,
					id: "description",
					placeholder: "Talk description",
				})}
				className="text-gray-800 px-6 pb-6 text-sm"
			>
				{description}
			</div>
		</div>
	);
};

export interface AudienceLabelProps {
	audienceName?: string;
}

const AudienceLabel: React.FC<AudienceLabelProps> = ({ audienceName }) => {
	let labelStyle = "bg-red-100 text-red-800";
	if (audienceName === "Developers") {
		labelStyle = "bg-green-100 text-green-800";
	} else if (audienceName === "Marketers") {
		labelStyle = "bg-indigo-100 text-indigo-800";
	}
	return (
		<span
			className={`ml-6 px-6 inline-flex text-xs leading-5 font-semibold rounded-full ${labelStyle}`}
		>
			{audienceName}
		</span>
	);
};

registerUniformComponent({
	type: "talk",
	component: Talk,
});

export default Talk;
