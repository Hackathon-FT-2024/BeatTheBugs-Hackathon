export default function SideNav() {
    return (
        <aside className="w-54 h-full bg-background pl-2" >
            <div className="p-4 pt-6">
                <h2 className="text-2xl font-bold">Tableau de bord</h2>
            </div>
            <nav className="mt-2">
                <a href="/dashboard/products" className="flex items-center px-4 py-2 hover:bg-secondary">
                    Produits
                </a>
            </nav>
        </aside >
    )
}