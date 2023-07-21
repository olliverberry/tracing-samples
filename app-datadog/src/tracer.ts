import tracer from 'dd-trace';
tracer.init(); // initialized in a different file to avoid hoisting.
tracer.use('express', {
    hooks: {
        request: (span, req, res) => {
            span.setTag('request.headers', req.headers);
            span.setTag('response.headers', res.getHeaders());
        },
    }
});
export default tracer;