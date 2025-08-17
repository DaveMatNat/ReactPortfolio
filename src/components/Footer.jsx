function Footer() {
    return (
        <footer className="flex justify-center items-center p-[2rem]">
            {/* <a target='_blank' href='https://www.linkedin.com/in/jamezmcarthur/'>
            <img src='https://media.licdn.com/dms/image/v2/D5603AQHtwwfgxu2fWQ/profile-displayphoto-crop_800_800/B56ZfwdksQGoAI-/0/1752085974194?e=1757548800&v=beta&t=XUZGCdqke6ppuCoBsgNbKGMe_Okb9s4GpJUp9shsYyw'
              alt='pfp' />
            <p>LinkedIn</p>
            <i className="fa-brands fa-linkedin-in"></i>
          </a> */}
            <h3>
                Made with ❤️ by David {(new Date()).getFullYear()}
            </h3>
        </footer>
    )
}

export default Footer;