// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:starwhat/models/people_response/people.dart';
import 'package:starwhat/models/people_response/people_response.dart';
import 'package:http/http.dart' as http;
import 'package:starwhat/screens/people_detail_screen.dart';

class PeopleScreen extends StatefulWidget {
  const PeopleScreen({super.key});

  @override
  State<PeopleScreen> createState() => _PeopleScreenState();
}

class _PeopleScreenState extends State<PeopleScreen> {
  late Future<PeopleResponse> peopleResponse;
  List<List<Color>> gradientsArray = [
    [
      Color(0xFF7780F2),
      Color(0xFF0A32C7),
    ],
    [
      Color(0xFF43DFB8),
      Color(0xFF12C37A),
    ],
    [
      Color(0xFFBEA2F2),
      Color(0xFF8515BF),
    ],
    [
      Color(0xFFFAB423),
      Color(0xFFE765B9),
    ],
  ];

  @override
  void initState() {
    super.initState();
    peopleResponse = getPeople();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('People'),
      ),
      backgroundColor: Color(0xFF182232),
      body: FutureBuilder<PeopleResponse>(
        future: peopleResponse,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return _buildPeopleList(context, snapshot.data!);
          } else if (snapshot.hasError) {
            return Text('${snapshot.error}');
          }
          // By default, show a loading spinner.
          return const Center(child: CircularProgressIndicator());
        },
      ),
    );
  }

  Future<PeopleResponse> getPeople() async {
    final response = await http.get(Uri.parse('https://swapi.dev/api/people'));

    if (response.statusCode == 200) {
      return PeopleResponse.fromJson(response.body);
    } else {
      throw Exception('Failed to load album');
    }
  }

  Widget _buildPeopleList(BuildContext context, PeopleResponse peopleResponse) {
    return ListView.separated(
        separatorBuilder: (context, index) => const Spacer(
              flex: 1,
            ),
        scrollDirection: Axis.horizontal,
        itemCount: peopleResponse.results!.length,
        itemBuilder: (context, index) {
          return _buildPeopleItem(
              context, peopleResponse.results![index], index);
        });
  }

  Widget _buildPeopleItem(BuildContext context, People people, int index) {
    return GestureDetector(
        onTap: () {
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (context) => PeopleDetailScreen(peopleItem: people),
            ),
          );
        },
        child: SizedBox(
          width: 220,
          child:
              Column(crossAxisAlignment: CrossAxisAlignment.center, children: [
            Stack(children: [
              Positioned(
                top: 40,
                child: Container(
                  height: 250,
                  width: 200,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.all(Radius.circular(50)),
                    gradient: RadialGradient(
                        colors: gradientsArray[index % gradientsArray.length]),
                  ),
                ),
              ),
              SizedBox(
                width: 200,
                height: 310,
                child: ShaderMask(
                  shaderCallback: (Rect bounds) {
                    return LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: <Color>[
                        gradientsArray[index][0].withOpacity(0.0),
                        gradientsArray[index][0].withOpacity(0.5),
                      ],
                      stops: <double>[0.0, 0.5],
                    ).createShader(bounds);
                  },
                  child: Image.asset(
                    'assets/img/${people.url!.split('/')[5]}.png',
                  ),
                ),
              ),
              SizedBox(
                width: 200,
                height: 300,
                child: Image.asset(
                  'assets/img/${people.url!.split('/')[5]}.png',
                ),
              ),
            ]),
            Center(
              child: Text(
                people.name!,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 14,
                ),
              ),
            ),
          ]),
        ));
  }
}
