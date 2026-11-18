export async function downloadFile(url: string, fileName: string) {
    try {
      const res = await fetch(url, { cache: "no-store" })
      const type = res.headers.get("content-type") || ""
      if (!res.ok || type.includes("text/html")) {
        throw new Error(`Fichier introuvable ou invalide (${res.status}, ${type}) : ${url}`)
      }
      const blob = await res.blob()
      const blobUrl = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = blobUrl
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000)
    } catch (err) {
      console.error(err)
      window.open(url, "_blank", "noopener")
    }
  }