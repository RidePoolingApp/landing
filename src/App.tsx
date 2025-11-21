import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
	return (
		<div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
			<footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
						<div className="col-span-1 md:col-span-2">
							<span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 block">
								WayLink
							</span>
							<p className="text-gray-500 max-w-xs">
								Connecting drivers and riders for a smarter, more efficient
								travel experience.
							</p>
						</div>

						<div>
							<h4 className="font-bold text-gray-900 mb-4">Product</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<a href="#" className="hover:text-blue-600">
										Features
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-600">
										Driver App
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-600">
										Rider App
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-600">
										Pricing
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-bold text-gray-900 mb-4">Company</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<a href="#" className="hover:text-blue-600">
										About Us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-600">
										Contact
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-600">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-600">
										Terms of Service
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-500">
							© {new Date().getFullYear()} WayLink. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							{/* Social Placeholders */}
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="w-6 h-6 bg-gray-200 rounded-full hover:bg-blue-500 transition-colors cursor-pointer"
								/>
							))}
						</div>
					</div>
				</div>
			</footer>{" "}
		</div>
	);
}

export default App;
