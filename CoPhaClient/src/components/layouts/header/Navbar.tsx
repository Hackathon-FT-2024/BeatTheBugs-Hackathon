import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const subMenuItemsTwo = [
  {
    title: 'Blog',
    description: 'The latest industry news, updates, and info',
    icon: <Book className="size-5 shrink-0" />,
    link: '/blog',
  },
  {
    title: 'Company',
    description: 'Our mission is to innovate and empower the world',
    icon: <Trees className="size-5 shrink-0" />,
    link: '/company',
  },
  {
    title: 'Careers',
    description: 'Browse job listings and discover our workspace',
    icon: <Sunset className="size-5 shrink-0" />,
    link: '/careers',
  },
  {
    title: 'Support',
    description:
      'Get in touch with our support team or visit our community forums',
    icon: <Zap className="size-5 shrink-0" />,
    link: '/support',
  },
];

const subMenuItemsOne = [
  {
    title: 'Vitamines',
    description: 'Exemple',
    icon: <Zap className="size-5 shrink-0" />,
    link: '/produits/vitamines',
  },
  {
    title: 'Minérales',
    description: 'Exemple',
    icon: <Sunset className="size-5 shrink-0" />,
    link: '/produits/minerales',
  },
];

export const Navbar = () => {
  return (
    <section>
      <div className="mx-auto container mt-1 sm:px-3 items-center">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link href="/" passHref legacyBehavior>
                <a className="flex items-center gap-2 cursor-pointer">
                  <img
                    src="https://www.shadcnblocks.com/images/block/block-1.svg"
                    className="w-8"
                    alt="logo"
                  />
                  <span className="text-xl font-bold">CoPha</span>
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/contact" passHref legacyBehavior>
                <a
                  className={cn(
                    'text-muted-foreground',
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: 'ghost',
                    })
                  )}
                >
                  Contact
                </a>
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>
                      <span>Produits</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        {subMenuItemsOne.map((item, idx) => (
                          <li key={idx}>
                            <Link href={item.link} passHref legacyBehavior>
                              <a
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        {subMenuItemsTwo.map((item, idx) => (
                          <li key={idx}>
                            <Link href={item.link} passHref legacyBehavior>
                              <a
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex gap-2">
            <Link href="/auth/login" passHref legacyBehavior>
              <a>
                <Button variant={'outline'}>Connexion</Button>
              </a>
            </Link>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" passHref legacyBehavior>
                <a>
                  <img
                    src="https://www.shadcnblocks.com/images/block/block-1.svg"
                    className="w-8"
                    alt="logo"
                  />
                  <span className="text-xl font-bold">CoPha</span>
                </a>
              </Link>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" passHref legacyBehavior>
                      <a className="flex items-center gap-2 mt-[-4%] ml-[-2%]">
                        <img
                          src="https://www.shadcnblocks.com/images/block/block-1.svg"
                          className="w-8"
                          alt="logo"
                        />
                        <span className="text-xl font-bold">CoPha</span>
                      </a>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="my-8 flex flex-col gap-4">
                  <Link href="/contact" passHref legacyBehavior>
                    <a className="font-semibold">Contact</a>
                  </Link>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="Produits" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Produits
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <Link href={item.link} passHref legacyBehavior key={idx}>
                            <a
                              className={cn(
                                'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                              )}
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="resources" className="border-b-0">
                      <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                        Resources
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsTwo.map((item, idx) => (
                          <Link href={item.link} passHref legacyBehavior key={idx}>
                            <a
                              className={cn(
                                'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                              )}
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <Link href="/press" passHref legacyBehavior>
                      <a
                        className={cn(
                          buttonVariants({
                            variant: 'ghost',
                          }),
                          'justify-start text-muted-foreground',
                        )}
                      >
                        Press
                      </a>
                    </Link>
                    <Link href="/contact" passHref legacyBehavior>
                      <a
                        className={cn(
                          buttonVariants({
                            variant: 'ghost',
                          }),
                          'justify-start text-muted-foreground',
                        )}
                      >
                        Contact
                      </a>
                    </Link>
                    <Link href="/imprint" passHref legacyBehavior>
                      <a
                        className={cn(
                          buttonVariants({
                            variant: 'ghost',
                          }),
                          'justify-start text-muted-foreground',
                        )}
                      >
                        Imprint
                      </a>
                    </Link>
                    <Link href="/sitemap" passHref legacyBehavior>
                      <a
                        className={cn(
                          buttonVariants({
                            variant: 'ghost',
                          }),
                          'justify-start text-muted-foreground',
                        )}
                      >
                        Sitemap
                      </a>
                    </Link>
                    <Link href="/legal" passHref legacyBehavior>
                      <a
                        className={cn(
                          buttonVariants({
                            variant: 'ghost',
                          }),
                          'justify-start text-muted-foreground',
                        )}
                      >
                        Legal
                      </a>
                    </Link>
                    <Link href="/cookie-settings" passHref legacyBehavior>
                      <a
                        className={cn(
                          buttonVariants({
                            variant: 'ghost',
                          }),
                          'justify-start text-muted-foreground',
                        )}
                      >
                        Cookie Settings
                      </a>
                    </Link>
                  </div>
                  <div className="mt-2 flex flex-col gap-3">
                    <Link href="/auth/login" passHref legacyBehavior>
                      <a>
                        <Button variant={'outline'}>Connexion</Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};
