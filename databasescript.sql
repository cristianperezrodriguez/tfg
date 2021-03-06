PGDMP                          x            develop4    12.1    12.1 ^    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    18226    develop4    DATABASE     �   CREATE DATABASE develop4 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';
    DROP DATABASE develop4;
                postgres    false            �            1259    19456    acs    TABLE     E  CREATE TABLE public.acs (
    "idAssignatura" integer NOT NULL,
    "idProva" integer NOT NULL,
    "idPregunta" integer NOT NULL,
    "idCriteri" integer NOT NULL,
    "idAlumne" integer NOT NULL,
    puntuacio integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.acs;
       public         heap    postgres    false            �            1259    18899    alumnes    TABLE     �   CREATE TABLE public.alumnes (
    id integer NOT NULL,
    nia integer NOT NULL,
    nom character varying(255),
    cognoms character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.alumnes;
       public         heap    postgres    false            �            1259    18897    alumnes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.alumnes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.alumnes_id_seq;
       public          postgres    false    203            �           0    0    alumnes_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.alumnes_id_seq OWNED BY public.alumnes.id;
          public          postgres    false    202            �            1259    18938    anys    TABLE     �   CREATE TABLE public.anys (
    id integer NOT NULL,
    text character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.anys;
       public         heap    postgres    false            �            1259    18960    anysAcademics    TABLE     �   CREATE TABLE public."anysAcademics" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "assignatureId" integer NOT NULL,
    "anyId" integer NOT NULL
);
 #   DROP TABLE public."anysAcademics";
       public         heap    postgres    false            �            1259    18936    anys_id_seq    SEQUENCE     �   CREATE SEQUENCE public.anys_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.anys_id_seq;
       public          postgres    false    209            �           0    0    anys_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.anys_id_seq OWNED BY public.anys.id;
          public          postgres    false    208            �            1259    19473    aprs    TABLE     3  CREATE TABLE public.aprs (
    "idAssignatura" integer NOT NULL,
    "idProva" integer NOT NULL,
    "idPregunta" integer NOT NULL,
    "idAlumne" integer NOT NULL,
    puntuacio character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.aprs;
       public         heap    postgres    false            �            1259    19414    aps    TABLE     
  CREATE TABLE public.aps (
    "idAssignatura" integer NOT NULL,
    "idProva" integer NOT NULL,
    "idAlumne" integer NOT NULL,
    nota character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.aps;
       public         heap    postgres    false            �            1259    18925    assignatures    TABLE     �   CREATE TABLE public.assignatures (
    id integer NOT NULL,
    codi character varying(255) NOT NULL,
    text character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.assignatures;
       public         heap    postgres    false            �            1259    18923    assignatures_id_seq    SEQUENCE     �   CREATE SEQUENCE public.assignatures_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.assignatures_id_seq;
       public          postgres    false    207            �           0    0    assignatures_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.assignatures_id_seq OWNED BY public.assignatures.id;
          public          postgres    false    206            �            1259    19444    criteris    TABLE     R  CREATE TABLE public.criteris (
    "idAssignatura" integer NOT NULL,
    "idProva" integer NOT NULL,
    "idPregunta" integer NOT NULL,
    "idCriteri" integer NOT NULL,
    "descripció" character varying(255),
    puntacio integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.criteris;
       public         heap    postgres    false            �            1259    19382 
   matricules    TABLE       CREATE TABLE public.matricules (
    "idAssignatura" integer NOT NULL,
    "idAny" integer NOT NULL,
    "idAlumne" integer NOT NULL,
    "notaFinal" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.matricules;
       public         heap    postgres    false            �            1259    19197    pds    TABLE     �   CREATE TABLE public.pds (
    "idAssignatura" integer NOT NULL,
    "idAny" integer NOT NULL,
    "idProfessor" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.pds;
       public         heap    postgres    false            �            1259    19431 	   preguntes    TABLE     \  CREATE TABLE public.preguntes (
    "idAssignatura" integer NOT NULL,
    "idProva" integer NOT NULL,
    "idPregunta" integer NOT NULL,
    "xMin" integer,
    "yMin" integer,
    "xMax" integer,
    "yMax" integer,
    "puntacioMax" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.preguntes;
       public         heap    postgres    false            �            1259    18912 
   professors    TABLE        CREATE TABLE public.professors (
    id integer NOT NULL,
    nia integer NOT NULL,
    nom character varying(255),
    cognoms character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.professors;
       public         heap    postgres    false            �            1259    18910    professors_id_seq    SEQUENCE     �   CREATE SEQUENCE public.professors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.professors_id_seq;
       public          postgres    false    205            �           0    0    professors_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.professors_id_seq OWNED BY public.professors.id;
          public          postgres    false    204            �            1259    19399    proves    TABLE       CREATE TABLE public.proves (
    "idAssignatura" integer NOT NULL,
    "idProva" integer NOT NULL,
    "descripció" character varying(255),
    nom character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.proves;
       public         heap    postgres    false            �            1259    18946    users    TABLE     r  CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    passwrod character varying(255),
    "firstName" character varying(255),
    "lastName" character varying(255),
    role character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "professorId" integer
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    18944    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    211            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    210            �
           2604    18902 
   alumnes id    DEFAULT     h   ALTER TABLE ONLY public.alumnes ALTER COLUMN id SET DEFAULT nextval('public.alumnes_id_seq'::regclass);
 9   ALTER TABLE public.alumnes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            �
           2604    18941    anys id    DEFAULT     b   ALTER TABLE ONLY public.anys ALTER COLUMN id SET DEFAULT nextval('public.anys_id_seq'::regclass);
 6   ALTER TABLE public.anys ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209            �
           2604    18928    assignatures id    DEFAULT     r   ALTER TABLE ONLY public.assignatures ALTER COLUMN id SET DEFAULT nextval('public.assignatures_id_seq'::regclass);
 >   ALTER TABLE public.assignatures ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    18915    professors id    DEFAULT     n   ALTER TABLE ONLY public.professors ALTER COLUMN id SET DEFAULT nextval('public.professors_id_seq'::regclass);
 <   ALTER TABLE public.professors ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    18949    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210    211            �          0    19456    acs 
   TABLE DATA           �   COPY public.acs ("idAssignatura", "idProva", "idPregunta", "idCriteri", "idAlumne", puntuacio, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   U�       �          0    18899    alumnes 
   TABLE DATA           R   COPY public.alumnes (id, nia, nom, cognoms, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    203   r�       �          0    18938    anys 
   TABLE DATA           B   COPY public.anys (id, text, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    209   À       �          0    18960    anysAcademics 
   TABLE DATA           ]   COPY public."anysAcademics" ("createdAt", "updatedAt", "assignatureId", "anyId") FROM stdin;
    public          postgres    false    212   �       �          0    19473    aprs 
   TABLE DATA           y   COPY public.aprs ("idAssignatura", "idProva", "idPregunta", "idAlumne", puntuacio, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   V�       �          0    19414    aps 
   TABLE DATA           e   COPY public.aps ("idAssignatura", "idProva", "idAlumne", nota, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   s�       �          0    18925    assignatures 
   TABLE DATA           P   COPY public.assignatures (id, codi, text, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    207   ��       �          0    19444    criteris 
   TABLE DATA           �   COPY public.criteris ("idAssignatura", "idProva", "idPregunta", "idCriteri", "descripció", puntacio, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   ځ       �          0    19382 
   matricules 
   TABLE DATA           q   COPY public.matricules ("idAssignatura", "idAny", "idAlumne", "notaFinal", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    214   ��       �          0    19197    pds 
   TABLE DATA           `   COPY public.pds ("idAssignatura", "idAny", "idProfessor", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   �       �          0    19431 	   preguntes 
   TABLE DATA           �   COPY public.preguntes ("idAssignatura", "idProva", "idPregunta", "xMin", "yMin", "xMax", "yMax", "puntacioMax", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   }�       �          0    18912 
   professors 
   TABLE DATA           U   COPY public.professors (id, nia, nom, cognoms, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    205   ��       �          0    19399    proves 
   TABLE DATA           j   COPY public.proves ("idAssignatura", "idProva", "descripció", nom, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   ��       �          0    18946    users 
   TABLE DATA              COPY public.users (id, username, passwrod, "firstName", "lastName", role, "createdAt", "updatedAt", "professorId") FROM stdin;
    public          postgres    false    211   �       �           0    0    alumnes_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.alumnes_id_seq', 1, true);
          public          postgres    false    202            �           0    0    anys_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.anys_id_seq', 2, true);
          public          postgres    false    208            �           0    0    assignatures_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.assignatures_id_seq', 4, true);
          public          postgres    false    206            �           0    0    professors_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.professors_id_seq', 2, true);
          public          postgres    false    204            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    210            �
           2606    19462 ?   acs acs_idAssignatura_idProva_idPregunta_idCriteri_idAlumne_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.acs
    ADD CONSTRAINT "acs_idAssignatura_idProva_idPregunta_idCriteri_idAlumne_key" UNIQUE ("idAssignatura", "idProva", "idPregunta", "idCriteri", "idAlumne");
 k   ALTER TABLE ONLY public.acs DROP CONSTRAINT "acs_idAssignatura_idProva_idPregunta_idCriteri_idAlumne_key";
       public            postgres    false    219    219    219    219    219            �
           2606    19460    acs acs_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.acs
    ADD CONSTRAINT acs_pkey PRIMARY KEY ("idAssignatura", "idProva", "idPregunta", "idCriteri", "idAlumne");
 6   ALTER TABLE ONLY public.acs DROP CONSTRAINT acs_pkey;
       public            postgres    false    219    219    219    219    219            �
           2606    18909    alumnes alumnes_nia_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.alumnes
    ADD CONSTRAINT alumnes_nia_key UNIQUE (nia);
 A   ALTER TABLE ONLY public.alumnes DROP CONSTRAINT alumnes_nia_key;
       public            postgres    false    203            �
           2606    18907    alumnes alumnes_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.alumnes
    ADD CONSTRAINT alumnes_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.alumnes DROP CONSTRAINT alumnes_pkey;
       public            postgres    false    203            �
           2606    18992 3   anysAcademics anysAcademics_assignatureId_anyId_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."anysAcademics"
    ADD CONSTRAINT "anysAcademics_assignatureId_anyId_key" UNIQUE ("assignatureId", "anyId");
 a   ALTER TABLE ONLY public."anysAcademics" DROP CONSTRAINT "anysAcademics_assignatureId_anyId_key";
       public            postgres    false    212    212            �
           2606    18964     anysAcademics anysAcademics_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."anysAcademics"
    ADD CONSTRAINT "anysAcademics_pkey" PRIMARY KEY ("assignatureId", "anyId");
 N   ALTER TABLE ONLY public."anysAcademics" DROP CONSTRAINT "anysAcademics_pkey";
       public            postgres    false    212    212            �
           2606    18943    anys anys_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.anys
    ADD CONSTRAINT anys_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.anys DROP CONSTRAINT anys_pkey;
       public            postgres    false    209            �
           2606    19489 7   aprs aprs_idAssignatura_idProva_idPregunta_idAlumne_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.aprs
    ADD CONSTRAINT "aprs_idAssignatura_idProva_idPregunta_idAlumne_key" UNIQUE ("idAssignatura", "idProva", "idPregunta", "idAlumne");
 c   ALTER TABLE ONLY public.aprs DROP CONSTRAINT "aprs_idAssignatura_idProva_idPregunta_idAlumne_key";
       public            postgres    false    220    220    220    220            �
           2606    19477    aprs aprs_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.aprs
    ADD CONSTRAINT aprs_pkey PRIMARY KEY ("idAssignatura", "idProva", "idPregunta", "idAlumne");
 8   ALTER TABLE ONLY public.aprs DROP CONSTRAINT aprs_pkey;
       public            postgres    false    220    220    220    220            �
           2606    19420 *   aps aps_idAssignatura_idProva_idAlumne_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.aps
    ADD CONSTRAINT "aps_idAssignatura_idProva_idAlumne_key" UNIQUE ("idAssignatura", "idProva", "idAlumne");
 V   ALTER TABLE ONLY public.aps DROP CONSTRAINT "aps_idAssignatura_idProva_idAlumne_key";
       public            postgres    false    216    216    216            �
           2606    19418    aps aps_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.aps
    ADD CONSTRAINT aps_pkey PRIMARY KEY ("idAssignatura", "idProva", "idAlumne");
 6   ALTER TABLE ONLY public.aps DROP CONSTRAINT aps_pkey;
       public            postgres    false    216    216    216            �
           2606    18935 "   assignatures assignatures_codi_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.assignatures
    ADD CONSTRAINT assignatures_codi_key UNIQUE (codi);
 L   ALTER TABLE ONLY public.assignatures DROP CONSTRAINT assignatures_codi_key;
       public            postgres    false    207            �
           2606    18933    assignatures assignatures_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.assignatures
    ADD CONSTRAINT assignatures_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.assignatures DROP CONSTRAINT assignatures_pkey;
       public            postgres    false    207            �
           2606    19455 @   criteris criteris_idAssignatura_idProva_idPregunta_idCriteri_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.criteris
    ADD CONSTRAINT "criteris_idAssignatura_idProva_idPregunta_idCriteri_key" UNIQUE ("idAssignatura", "idProva", "idPregunta", "idCriteri");
 l   ALTER TABLE ONLY public.criteris DROP CONSTRAINT "criteris_idAssignatura_idProva_idPregunta_idCriteri_key";
       public            postgres    false    218    218    218    218            �
           2606    19448    criteris criteris_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.criteris
    ADD CONSTRAINT criteris_pkey PRIMARY KEY ("idAssignatura", "idProva", "idPregunta", "idCriteri");
 @   ALTER TABLE ONLY public.criteris DROP CONSTRAINT criteris_pkey;
       public            postgres    false    218    218    218    218            �
           2606    19398 6   matricules matricules_idAssignatura_idAny_idAlumne_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.matricules
    ADD CONSTRAINT "matricules_idAssignatura_idAny_idAlumne_key" UNIQUE ("idAssignatura", "idAny", "idAlumne");
 b   ALTER TABLE ONLY public.matricules DROP CONSTRAINT "matricules_idAssignatura_idAny_idAlumne_key";
       public            postgres    false    214    214    214            �
           2606    19386    matricules matricules_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public.matricules
    ADD CONSTRAINT matricules_pkey PRIMARY KEY ("idAssignatura", "idAny", "idAlumne");
 D   ALTER TABLE ONLY public.matricules DROP CONSTRAINT matricules_pkey;
       public            postgres    false    214    214    214            �
           2606    19203 +   pds pds_idAssignatura_idAny_idProfessor_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.pds
    ADD CONSTRAINT "pds_idAssignatura_idAny_idProfessor_key" UNIQUE ("idAssignatura", "idAny", "idProfessor");
 W   ALTER TABLE ONLY public.pds DROP CONSTRAINT "pds_idAssignatura_idAny_idProfessor_key";
       public            postgres    false    213    213    213            �
           2606    19201    pds pds_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.pds
    ADD CONSTRAINT pds_pkey PRIMARY KEY ("idAssignatura", "idAny", "idProfessor");
 6   ALTER TABLE ONLY public.pds DROP CONSTRAINT pds_pkey;
       public            postgres    false    213    213    213            �
           2606    19438 8   preguntes preguntes_idAssignatura_idProva_idPregunta_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.preguntes
    ADD CONSTRAINT "preguntes_idAssignatura_idProva_idPregunta_key" UNIQUE ("idAssignatura", "idProva", "idPregunta");
 d   ALTER TABLE ONLY public.preguntes DROP CONSTRAINT "preguntes_idAssignatura_idProva_idPregunta_key";
       public            postgres    false    217    217    217            �
           2606    19435    preguntes preguntes_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.preguntes
    ADD CONSTRAINT preguntes_pkey PRIMARY KEY ("idAssignatura", "idProva", "idPregunta");
 B   ALTER TABLE ONLY public.preguntes DROP CONSTRAINT preguntes_pkey;
       public            postgres    false    217    217    217            �
           2606    18922    professors professors_nia_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_nia_key UNIQUE (nia);
 G   ALTER TABLE ONLY public.professors DROP CONSTRAINT professors_nia_key;
       public            postgres    false    205            �
           2606    18920    professors professors_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.professors DROP CONSTRAINT professors_pkey;
       public            postgres    false    205            �
           2606    19408 '   proves proves_idAssignatura_idProva_key 
   CONSTRAINT     z   ALTER TABLE ONLY public.proves
    ADD CONSTRAINT "proves_idAssignatura_idProva_key" UNIQUE ("idAssignatura", "idProva");
 S   ALTER TABLE ONLY public.proves DROP CONSTRAINT "proves_idAssignatura_idProva_key";
       public            postgres    false    215    215            �
           2606    19406    proves proves_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.proves
    ADD CONSTRAINT proves_pkey PRIMARY KEY ("idAssignatura", "idProva");
 <   ALTER TABLE ONLY public.proves DROP CONSTRAINT proves_pkey;
       public            postgres    false    215    215            �
           2606    18954    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    211                       2606    19468    acs acs_idAlumne_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.acs
    ADD CONSTRAINT "acs_idAlumne_fkey" FOREIGN KEY ("idAlumne") REFERENCES public.alumnes(id) NOT VALID;
 A   ALTER TABLE ONLY public.acs DROP CONSTRAINT "acs_idAlumne_fkey";
       public          postgres    false    2760    203    219                       2606    19463 7   acs acs_idAssignatura_idProva_idPregunta_idCriteri_fkey    FK CONSTRAINT       ALTER TABLE ONLY public.acs
    ADD CONSTRAINT "acs_idAssignatura_idProva_idPregunta_idCriteri_fkey" FOREIGN KEY ("idAssignatura", "idProva", "idPregunta", "idCriteri") REFERENCES public.criteris("idAssignatura", "idProva", "idPregunta", "idCriteri") NOT VALID;
 c   ALTER TABLE ONLY public.acs DROP CONSTRAINT "acs_idAssignatura_idProva_idPregunta_idCriteri_fkey";
       public          postgres    false    2800    219    219    219    219    218    218    218    218            �
           2606    18970 &   anysAcademics anysAcademics_anyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."anysAcademics"
    ADD CONSTRAINT "anysAcademics_anyId_fkey" FOREIGN KEY ("anyId") REFERENCES public.anys(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."anysAcademics" DROP CONSTRAINT "anysAcademics_anyId_fkey";
       public          postgres    false    2770    209    212            �
           2606    18965 .   anysAcademics anysAcademics_assignatureId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."anysAcademics"
    ADD CONSTRAINT "anysAcademics_assignatureId_fkey" FOREIGN KEY ("assignatureId") REFERENCES public.assignatures(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public."anysAcademics" DROP CONSTRAINT "anysAcademics_assignatureId_fkey";
       public          postgres    false    2768    207    212                       2606    19483    aprs aprs_idAlumne_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.aprs
    ADD CONSTRAINT "aprs_idAlumne_fkey" FOREIGN KEY ("idAlumne") REFERENCES public.alumnes(id) NOT VALID;
 C   ALTER TABLE ONLY public.aprs DROP CONSTRAINT "aprs_idAlumne_fkey";
       public          postgres    false    203    2760    220                       2606    19478 /   aprs aprs_idAssignatura_idProva_idPregunta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.aprs
    ADD CONSTRAINT "aprs_idAssignatura_idProva_idPregunta_fkey" FOREIGN KEY ("idAssignatura", "idProva", "idPregunta") REFERENCES public.preguntes("idAssignatura", "idProva", "idPregunta") NOT VALID;
 [   ALTER TABLE ONLY public.aprs DROP CONSTRAINT "aprs_idAssignatura_idProva_idPregunta_fkey";
       public          postgres    false    2796    217    217    220    217    220    220                       2606    19426    aps aps_idAlumne_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.aps
    ADD CONSTRAINT "aps_idAlumne_fkey" FOREIGN KEY ("idAlumne") REFERENCES public.alumnes(id) NOT VALID;
 A   ALTER TABLE ONLY public.aps DROP CONSTRAINT "aps_idAlumne_fkey";
       public          postgres    false    216    203    2760                       2606    19421 "   aps aps_idAssignatura_idProva_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.aps
    ADD CONSTRAINT "aps_idAssignatura_idProva_fkey" FOREIGN KEY ("idAssignatura", "idProva") REFERENCES public.proves("idAssignatura", "idProva") NOT VALID;
 N   ALTER TABLE ONLY public.aps DROP CONSTRAINT "aps_idAssignatura_idProva_fkey";
       public          postgres    false    216    216    215    215    2788                       2606    19449 7   criteris criteris_idAssignatura_idProva_idPregunta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.criteris
    ADD CONSTRAINT "criteris_idAssignatura_idProva_idPregunta_fkey" FOREIGN KEY ("idAssignatura", "idProva", "idPregunta") REFERENCES public.preguntes("idAssignatura", "idProva", "idPregunta") NOT VALID;
 c   ALTER TABLE ONLY public.criteris DROP CONSTRAINT "criteris_idAssignatura_idProva_idPregunta_fkey";
       public          postgres    false    217    2796    217    218    218    218    217            �
           2606    19392 #   matricules matricules_idAlumne_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.matricules
    ADD CONSTRAINT "matricules_idAlumne_fkey" FOREIGN KEY ("idAlumne") REFERENCES public.alumnes(id) NOT VALID;
 O   ALTER TABLE ONLY public.matricules DROP CONSTRAINT "matricules_idAlumne_fkey";
       public          postgres    false    203    214    2760            �
           2606    19387 .   matricules matricules_idAssignatura_idAny_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.matricules
    ADD CONSTRAINT "matricules_idAssignatura_idAny_fkey" FOREIGN KEY ("idAssignatura", "idAny") REFERENCES public."anysAcademics"("assignatureId", "anyId") NOT VALID;
 Z   ALTER TABLE ONLY public.matricules DROP CONSTRAINT "matricules_idAssignatura_idAny_fkey";
       public          postgres    false    214    214    2776    212    212            �
           2606    19204     pds pds_idAssignatura_idAny_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pds
    ADD CONSTRAINT "pds_idAssignatura_idAny_fkey" FOREIGN KEY ("idAssignatura", "idAny") REFERENCES public."anysAcademics"("assignatureId", "anyId") NOT VALID;
 L   ALTER TABLE ONLY public.pds DROP CONSTRAINT "pds_idAssignatura_idAny_fkey";
       public          postgres    false    212    212    2776    213    213            �
           2606    19209    pds pds_idProfessor_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pds
    ADD CONSTRAINT "pds_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES public.professors(id) NOT VALID;
 D   ALTER TABLE ONLY public.pds DROP CONSTRAINT "pds_idProfessor_fkey";
       public          postgres    false    2764    205    213                       2606    19439 .   preguntes preguntes_idAssignatura_idProva_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.preguntes
    ADD CONSTRAINT "preguntes_idAssignatura_idProva_fkey" FOREIGN KEY ("idAssignatura", "idProva") REFERENCES public.proves("idAssignatura", "idProva") NOT VALID;
 Z   ALTER TABLE ONLY public.preguntes DROP CONSTRAINT "preguntes_idAssignatura_idProva_fkey";
       public          postgres    false    215    215    217    2788    217                        2606    19409     proves proves_idAssignatura_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.proves
    ADD CONSTRAINT "proves_idAssignatura_fkey" FOREIGN KEY ("idAssignatura") REFERENCES public.assignatures(id) NOT VALID;
 L   ALTER TABLE ONLY public.proves DROP CONSTRAINT "proves_idAssignatura_fkey";
       public          postgres    false    207    215    2768            �
           2606    18955    users users_professorId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES public.professors(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_professorId_fkey";
       public          postgres    false    2764    211    205            �      x������ � �      �   A   x�3�4426153���O��,�/JI-J�4202�50�5�T04�24�2��366�60�#����� �      �   0   x�3�420�f�f�F�
&V�VF��F8����$j����� `��      �   C   x�}ɱ� �ڞ���)����H@i���e�,��:d�s]f�j��̯i?�&?��_�0      �      x������ � �      �      x������ � �      �   :   x�3�4�Ĝ��ļJN#C3]3]#c+C+#Sm#�\&�F@@��=... �I�      �      x������ � �      �      x������ � �      �   Y   x�}˹�0@��L�>2�0�f��?G�
9V���)\��*q�E�`Gֶ�__��⾰)��r������2�xt^ؔ�D � �+�      �      x������ � �      �   O   x�3�4466151��*M��,H�����4204�50�52V00�24�22�60�!�e2���3+�8�3�8-�Db���� H6�      �      x������ � �      �      x������ � �     