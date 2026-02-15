export default function WhatsAppButton() {
  const phone = "919354749066"; // 🔁 replace with your number

  const message = encodeURIComponent(
    "Hi Manas, I saw your portfolio and want to discuss a project."
  );

  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center">
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0a11.91 11.91 0 0 0-10.3 17.9L0 24l6.3-1.64A11.92 11.92 0 1 0 20.52 3.48zM12 21.8a9.77 9.77 0 0 1-5-1.4l-.36-.22-3.74.97 1-3.64-.23-.37A9.8 9.8 0 1 1 12 21.8zm5.43-7.3c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.66.15s-.76.97-.93 1.17c-.17.2-.34.22-.64.07a7.94 7.94 0 0 1-2.33-1.44 8.8 8.8 0 0 1-1.63-2c-.17-.3 0-.46.13-.6.13-.13.3-.34.46-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.2-.23-.56-.47-.5-.66-.51h-.56c-.2 0-.52.07-.8.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.7.3 1.25.47 1.68.6.7.22 1.33.19 1.83.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.56-.35z" />
        </svg>
      </div>
    </a>
  );
}
