import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text('Login Page')),
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          child: const Icon(Icons.add),
        ),
        body: Container(
          color: Colors.yellow,
          child: SizedBox(
            width: double.infinity,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () {},
                  child: const Text('Login'),
                ),
                const Divider(
                  height: 100,
                  // color: Colors.yellow,
                ),
                Stack(
                  children: [
                    SizedBox(
                      height: 100,
                      width: 100,
                      child: Container(
                        color: Colors.red,
                        child: const Center(
                            child: Text('hola',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold))),
                      ),
                    ),
                    SizedBox(
                      height: 100,
                      width: 100,
                      child: Container(
                        color: const Color.fromARGB(127, 0, 255, 0),
                        child: const Text(''),
                      ),
                    )
                  ],
                ),
                Container(
                    margin: const EdgeInsets.only(bottom: 50),
                    child: const Text('Registro')),
                const Text('¿Olvidaste contraseña?'),
              ],
            ),
          ),
        ));
  }
}
