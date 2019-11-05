<style>
    .loading {
        animation: spinner 1s linear infinite;
        border: 5px solid #dcdcdc;
        border-left-color: #00cc99;
        border-radius: 100%;
        display: block;
        height: 100px;
        left: 50%;
        margin-top: -50px;
        margin-left: -50px;
        position: absolute;
        top: 50%;
        width: 100px;
    }

    @keyframes spinner {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>

<span class="loading"></span>