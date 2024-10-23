import { Button } from '&/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '&/components/ui/navigation-menu'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <header className='container mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
          <Link href='/' className='text-2xl font-bold text-blue-600'>
            GenMeal
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className='text-sm font-medium hover:text-blue-600 transition-colors'
                  href='/'
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className='text-sm font-medium hover:text-blue-600 transition-colors'
                  href='/about'
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className='text-sm font-medium hover:text-blue-600 transition-colors'
                  href='/login'
                >
                  Login
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className='text-sm font-medium hover:text-blue-600 transition-colors'
                  href='/signup'
                >
                  Sign Up
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
      <main className='flex-grow container mx-auto px-4 py-12'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-5xl font-bold text-blue-600 mb-6'>
            Personalized Nutrition Powered by Genetics and AI
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            Discover your perfect meal plan based on your unique genetic profile
            and dietary preferences.
          </p>
          <Button
            size='lg'
            className='bg-green-500 hover:bg-green-600 text-white'
          >
            Get Started
          </Button>
        </div>
      </main>
      <footer className='bg-blue-50 py-6'>
        <div className='container mx-auto px-4 text-center text-gray-600'>
          © 2024 GenMeal. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
