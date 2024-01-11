import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Loading() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Fonction pour gérer le début d'un changement de route
        const handleStart = () => {
          // Vérifie si l'URL actuelle est différente de l'URL de destination
          // Si c'est le cas, définir l'état de chargement sur true
           setLoading(true);
        }
      
        // Fonction pour gérer la fin d'un changement de route (réussi ou en erreur)
        const handleComplete = (url: string) => setLoading(false);
      
        // Ajoute des écouteurs d'événements pour les changements de route
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
      
        // Nettoyage : Supprime les écouteurs d'événements lorsque le composant est démonté
        return () => {
          router.events.off('routeChangeStart', handleStart);
          router.events.off('routeChangeComplete', handleComplete);
          router.events.off('routeChangeError', handleComplete);
        }
      }, []) // Le tableau de dépendances vide garantit que l'effet s'exécute uniquement une fois au montage
      

if(loading) {
    
  return (
    <div
    className='z-50 fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur 
    flex flex-col items-center justify-center'
    >
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-400"></div>
    </div>
  )
}
}

export default Loading

