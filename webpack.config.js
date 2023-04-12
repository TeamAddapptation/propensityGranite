const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
	entry: {
		main: path.resolve(__dirname, "./src/app.js"),
		form: path.resolve(__dirname, "./src/pages/form/form.js"),
		table: path.resolve(__dirname, "./src/pages/table/table.js"),
		tableFrame: path.resolve(__dirname, "./src/pages/tableFrame/tableFrame.js"),
		tabs: path.resolve(__dirname, "./src/pages/tabs/tabs.js"),
		checklist: path.resolve(__dirname, "./src/pages/checklist/checklist.js"),
		// AUTH
		signIn: path.resolve(__dirname, "./src/platform/auth/signIn/signIn.js"),
		forgotPassword: path.resolve(__dirname, "./src/platform/auth/forgotPassword/forgotPassword.js"),
		createAccount: path.resolve(__dirname, "./src/platform/auth/createAccount/createAccount.js"),
		resetPassword: path.resolve(__dirname, "./src/platform/auth/resetPassword/resetPassword.js"),
		// PLATFORM
		dataConnections: path.resolve(__dirname, "./src/platform/dataConnections/dataConnections.js"),
		profile: path.resolve(__dirname, "./src/platform/profile/profile.js"),
		passwordReset: path.resolve(__dirname, "./src/platform/passwordReset/passwordReset.js"),
		billing: path.resolve(__dirname, "./src/platform/billing/billing.js"),
		users: path.resolve(__dirname, "./src/platform/users/users.js"),
		// APPS
		top100: path.resolve(__dirname, "./src/apps/top100/top100.js"),
		accountSummary: path.resolve(__dirname, "./src/apps/accountSummary/accountSummary.js"),
		campaign: path.resolve(__dirname, "./src/apps/campaign/campaign.js"),
		newExperience: path.resolve(__dirname, "./src/apps/newExperience/newExperience.js"),
		adBuilder: path.resolve(__dirname, "./src/apps/adBuilder/adBuilder.js"),
		coach: path.resolve(__dirname, "./src/apps/coach/coach.js"),
		overview: path.resolve(__dirname, "./src/apps/overview/overview.js"),
		overviewEmpty: path.resolve(__dirname, "./src/apps/overviewEmpty/overviewEmpty.js"),
		trackingDetails: path.resolve(__dirname, "./src/apps/trackingDetails/trackingDetails.js"),
		// PLAYGROUND
		components: path.resolve(__dirname, "./src/playground/components/components.js"),
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "./dist"),
		},
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Addapptation Granite",
		}),
		new HtmlWebpackPlugin({
			filename: "form.html",
			inject: "body",
			template: "./src/pages/form/form.html",
			chunks: ["main", "form"],
		}),
		new HtmlWebpackPlugin({
			filename: "table.html",
			inject: "body",
			template: "./src/pages/table/table.html",
			chunks: ["main", "table"],
		}),
		new HtmlWebpackPlugin({
			filename: "tableFrame.html",
			inject: "body",
			template: "./src/pages/tableFrame/tableFrame.html",
			chunks: ["main", "tableFrame"],
		}),
		new HtmlWebpackPlugin({
			filename: "tabs.html",
			inject: "body",
			template: "./src/pages/tabs/tabs.html",
			chunks: ["main", "tabs"],
		}),
		new HtmlWebpackPlugin({
			filename: "checklist.html",
			inject: "body",
			template: "./src/pages/checklist/checklist.html",
			chunks: ["main", "checklist"],
		}),
		// AUTH
		new HtmlWebpackPlugin({
			filename: "signIn.html",
			inject: "body",
			template: "./src/platform/auth/signIn/signIn.html",
			chunks: ["main", "signIn"],
		}),
		new HtmlWebpackPlugin({
			filename: "forgotPassword.html",
			inject: "body",
			template: "./src/platform/auth/forgotPassword/forgotPassword.html",
			chunks: ["main", "forgotPassword"],
		}),
		new HtmlWebpackPlugin({
			filename: "createAccount.html",
			inject: "body",
			template: "./src/platform/auth/createAccount/createAccount.html",
			chunks: ["main", "createAccount"],
		}),
		new HtmlWebpackPlugin({
			filename: "resetPassword.html",
			inject: "body",
			template: "./src/platform/auth/resetPassword/resetPassword.html",
			chunks: ["main", "resetPassword"],
		}),
		// PLATFORM
		new HtmlWebpackPlugin({
			filename: "dataConnections.html",
			inject: "body",
			template: "./src/platform/dataConnections/dataConnections.html",
			chunks: ["main", "dataConnections"],
		}),
		new HtmlWebpackPlugin({
			filename: "profile.html",
			inject: "body",
			template: "./src/platform/profile/profile.html",
			chunks: ["main", "profile"],
		}),
		new HtmlWebpackPlugin({
			filename: "passwordReset.html",
			inject: "body",
			template: "./src/platform/passwordReset/passwordReset.html",
			chunks: ["main", "passwordReset"],
		}),
		new HtmlWebpackPlugin({
			filename: "billing.html",
			inject: "body",
			template: "./src/platform/billing/billing.html",
			chunks: ["main", "billing"],
		}),
		new HtmlWebpackPlugin({
			filename: "users.html",
			inject: "body",
			template: "./src/platform/users/users.html",
			chunks: ["main", "users"],
		}),
		new HtmlWebpackPlugin({
			filename: "template.html",
			inject: "body",
			template: "./src/platform/template/template.html",
			chunks: ["main"],
		}),
		// APPS
		new HtmlWebpackPlugin({
			filename: "top100.html",
			inject: "body",
			template: "./src/apps/top100/top100.html",
			chunks: ["main", "top100"],
		}),
		new HtmlWebpackPlugin({
			filename: "accountSummary.html",
			inject: "body",
			template: "./src/apps/accountSummary/accountSummary.html",
			chunks: ["main", "accountSummary"],
		}),
		new HtmlWebpackPlugin({
			filename: "campaign.html",
			inject: "body",
			template: "./src/apps/campaign/campaign.html",
			chunks: ["main", "campaign"],
		}),
		new HtmlWebpackPlugin({
			filename: "newExperience.html",
			inject: "body",
			template: "./src/apps/newExperience/newExperience.html",
			chunks: ["main", "newExperience"],
		}),
		new HtmlWebpackPlugin({
			filename: "adBuilder.html",
			inject: "body",
			template: "./src/apps/adBuilder/adBuilder.html",
			chunks: ["main", "adBuilder"],
		}),
		new HtmlWebpackPlugin({
			filename: "coach.html",
			inject: "body",
			template: "./src/apps/coach/coach.html",
			chunks: ["main", "coach"],
		}),
		new HtmlWebpackPlugin({
			filename: "overview.html",
			inject: "body",
			template: "./src/apps/overview/overview.html",
			chunks: ["main", "overview"],
		}),
		new HtmlWebpackPlugin({
			filename: "overviewEmpty.html",
			inject: "body",
			template: "./src/apps/overviewEmpty/overviewEmpty.html",
			chunks: ["main", "overviewEmpty"],
		}),
		new HtmlWebpackPlugin({
			filename: "trackingDetails.html",
			inject: "body",
			template: "./src/apps/trackingDetails/trackingDetails.html",
			chunks: ["main", "trackingDetails"],
		}),
		// PLAYGROUND
		new HtmlWebpackPlugin({
			filename: "components.html",
			inject: "body",
			template: "./src/playground/components/components.html",
			chunks: ["components"],
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/i,
				type: "assets/resources",
			},
		],
	},
};
