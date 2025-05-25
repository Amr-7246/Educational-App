import TeacherNavBar from "./components/TeacherNavBar";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <TeacherNavBar/>
            {children}
        </section>
    );
}