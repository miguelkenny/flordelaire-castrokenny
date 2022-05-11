export const Contact = () => {
    
    return (
        <div className="container mt-4 mb-5 shadow">
            <div className="text-center">
                <img src="/bg-contacto.jpg" alt="pagina-de-contacto" className="img-fluid"/>
            </div>
            <div className="p-5">
                <form className="was-validated border p-5 shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="validationServer01" className="display-6 form-label">Nombre</label>
                            <input 
                                type="text"
                                className="form-control is-valid shadow-sm p-3 mb-5 bg-body rounded"
                                id="validationServer01"
                                placeholder="Nombre Completo"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="validationServer01" className="display-6 form-label">Email</label>
                            <input
                                type="email"
                                className="form-control is-valid shadow-sm p-3 mb-5 bg-body rounded"
                                id="validationServer01"
                                placeholder="Ingresa un email válido"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationTextarea2" className="display-6 form-label">Mensaje</label>
                        <textarea
                            className="form-control is-invalid shadow-sm p-3 mb-5 bg-body rounded"
                            id="validationTextarea2"
                            placeholder="Mensaje requerido"
                            required
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                    </div>
                </form>
            </div>
        </div>
    )
}