function Header() {
    return (
        <>
            <section id="center">
            
                <div>
                    <Welcome name="Alice" />
                </div>
                <button
                    type="button"
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Contador é {count}
                </button>
            </section>
        </>
    )
}