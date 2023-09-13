function LoginForm() {
	return (
		<div class="h-screen w-screen flex items-center justify-center">
			<form class="block w-1/4 h-1/4 shadow-xl space-y-5 text-center" method="POST" action="/auth/process">
				<div class="flex items-center justify-center">
					<input class="block w-1/2 text-center mx-auto shadow-md" type="text" name="username" required />
					<input class="block w-1/2 text-center mx-auto shadow-md" type="password" name="password" required />
					<input class="shadow-md p-5" type="submit" value="Login" />
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
