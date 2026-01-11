import { readFileSync } from "fs"
import { join } from "path"

export async function GET() {
  try {
    // Adjust path based on your APK location
    // For now, return sample APK or create placeholder
    const filePath = join(process.cwd(), "public", "secdork-app.apk")

    try {
      const fileBuffer = readFileSync(filePath)
      return new Response(fileBuffer, {
        headers: {
          "Content-Type": "application/vnd.android.package-archive",
          "Content-Disposition": 'attachment; filename="secdork-app.apk"',
          "Cache-Control": "public, max-age=3600",
        },
      })
    } catch {
      // If APK file not found, return error response
      return new Response("APK file not found. Please add secdork-app.apk to /public folder.", {
        status: 404,
        headers: { "Content-Type": "text/plain" },
      })
    }
  } catch (error) {
    return new Response("Error downloading APK", { status: 500 })
  }
}
