export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="absolute bottom-0 left-0 right-0 mt-28">
            <span>
                Designed and Developed by Aaron Torres <br />
                Copyright © {year} Aaron Torres
            </span>
        </div>
    );
}
