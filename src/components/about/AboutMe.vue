<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Good day, my name is Nazme Aiman bin Yunus, 25 years old, a full stack engineer who is currently a freelancer. I have a diploma in Computer Science and a Bachelor’s Degree of Information Technology majoring in Business Computing. I have 2 years of experiences in sofware engineering field. ',
				},
				{
					id: 2,
					bio:
						'For the time being i am focusing on my start-up which is called Go-Tadika. I am developing this project  to enhance my programming, logical, communications skill. For further information on this project, visit <a href="https://gotadika.com/" target="_blank" class="text-indigo-500"> Go-Tadika</a>',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profilepicture.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<div
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				<p v-html="bio.bio"></p>
			</div>
		</div>
	</div>
</template>
