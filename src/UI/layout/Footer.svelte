<footer class="footer">
    <p>Copyright &copy; 2023, All Rights reserved</p>
    <a href="create.html">Post Job</a>
</footer>

<style>
  /* Equivalent CSS for the footer */
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    background-color: #272b34;
    color: white;
    height: 6rem; 
    margin-top: 6rem; 
    opacity: 0.9;
  }

  /* Medium devices and up */
  @media (min-width: 768px) {
    .footer {
      justify-content: center;
    }
  }

  .footer p {
    margin-left: 0.5rem;
  }

  .footer a {
    position: absolute;
    top: 33%;
    right: 2.5rem;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }
</style>