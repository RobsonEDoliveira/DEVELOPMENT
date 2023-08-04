

https://www.tecmundo.com.br/software/237426-google-chrome-veja-lista-atalhos-atualizada-windows.htm

REMOVER ESPAÇO
var urlSplit = _user.Split('/');
string usurario = urlSplit[0].ToString().Trim();
string comboTexto = Regex.Replace(urlSplit[1], @"\s", "").ToUpper();

NOVA ABA
sendKeys(Keys.CONTROL +"t");

// open in default browser
Process.Start("http://www.stackoverflow.net");

// open in Internet Explorer
Process.Start("iexplore", @"http://www.stackoverflow.net/");

// open in Firefox
Process.Start("firefox", @"http://www.stackoverflow.net/");

// open in Google Chrome
Process.Start("chrome", @"http://www.stackoverflow.net/");

Process.Start(@"%AppData%\..\Local\Google\Chrome\Application\chrome.exe", "http:\\www.YourUrl.com");




****************************************************************
*                              C#                              *
****************************************************************

# TESTE COM LOG NO DESKTOP

string userPathx = Environment.GetFolderPath(Environment.SpecialFolder.Desktop) + "\\";
string nomeArquivo = userPathx + DateTime.Now.ToString("yyyyMMddHHmmss") + ".txt";
StreamWriter writer = new StreamWriter(nomeArquivo);

writer.WriteLine("1 _user - " + _user);

writer.Close();
______________________________________________________________________________________________________________
# QUANDO OCORRER ERRO REFERENTE A DATA, FUNCIONA BEM LOCAL E NÃO NO SERVIDOR.
# COLOCAR ESSE TRECHO NA CLASSSE (Program.cs)

// Get Culture Info from appsettings and set Default culture for application.
// If not found culture value from appsettings then use "pt-BR"
var culture = builder.Configuration.GetValue<string>("SetCultureInfo:Culture") ?? "pt-BR";
var cultureInfo = new System.Globalization.CultureInfo(culture);
System.Globalization.CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
System.Globalization.CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;
______________________________________________________________________________________________________________
# PARA COOCKIES NA CLASSE (Program.cs)

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>{
        //options.Cookie.HttpOnly = true;
        options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
        options.LoginPath = "/Login/Index";
        options.AccessDeniedPath = "/Login/Index";
        options.LogoutPath = "/Login/Logout";
        options.SlidingExpiration = true;
    });
______________________________________________________________________________________________________________
# REMOVER A PALAVRA "AspNet" DAS TABELAS DO IDENTITY NO BANCO

 protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Corrigir o nome das tabelas do Identity
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var table = entityType.GetTableName();
                if (table.StartsWith("AspNet"))
                    entityType.SetTableName("" + table.Substring(6));

                foreach (var fk in entityType.GetForeignKeys())
                         fk.DeleteBehavior = DeleteBehavior.NoAction;
            }
		}



______________________________________________________________________________________________________________
# Necessário para executar o arquivo .Bat do sistema
C:\KenanFX\FXLauncher\FXLauncher_x32

            Process proc = null;

            string caminhoCompleto = @_url;
            string _caminhoCompleto = Path.GetDirectoryName(caminhoCompleto);
            string _nomeArquivo = Path.GetFileName(caminhoCompleto);            
            string _batDir = string.Format(@_caminhoCompleto);

            proc = new Process();
            proc.StartInfo.WorkingDirectory = _batDir;
            proc.StartInfo.FileName = _nomeArquivo; // bat
            proc.StartInfo.CreateNoWindow = false;
            proc.Start();
            proc.WaitForExit();
           
            proc.Close();
______________________________________________________________________________________________________________
# ESPERAR POR UMA JANELA

            // Espero a tela [Login] aparecer
            string sJanelaDeEspera = "";
            while (sJanelaDeEspera == "")
            {
                if (AutoItX.WinExists(sNomeJanela) == 1)
                {
                    sJanelaDeEspera = sNomeJanela;

                    // Insiro Usuário
                    Thread.Sleep(500);
                    AutoItX.Send(_user + "{TAB}");

                    // Insiro Senha
                    Thread.Sleep(500);
                    AutoItX.Send(sSenhaTratada + "{TAB}{Enter}");

                    break;
                }
            }
______________________________________________________________________________________________________________
# PARA NÃO EXIBIR A MENSAGEM
Aviso de Segurança
Não é possível verificar quem criou este arquivo. Tem certeza de que deseja executar o arquivo?

            ProcessStartInfo startInfo = new ProcessStartInfo("cmd.exe");
            startInfo.UseShellExecute = false;
            startInfo.FileName = _url;
            Process.Start(startInfo);
______________________________________________________________________________________________________________
# Verifico se vai aparecer Popup de tempo de Licença
        private void VerificarExisteTelaError()
        {
            string sNomeJanelaError = "SRC - Erro!!!";
            AutoItX.WinWait(sNomeJanelaError, "", 20);
            AutoItX.WinActivate(sNomeJanelaError, "");

            string sJanelaDeEspera = "";
            int cont = 0;

            while (sJanelaDeEspera == "" && cont < 3)
            {
                if (AutoItX.WinExists(sNomeJanelaError) == 1)
                {
                    sJanelaDeEspera = sNomeJanelaError;
                    
                    // Clico no Botão do Popup de error de Licença
                    AutoItX.ControlClick(sNomeJanelaError, "", "[CLASS:TsuiButton]");
                }
                cont++;
            }
        }
===============================
             // Nome da Janela [Login]
            string sNomeJanela = "Login";
            string sSenhaTratada = TratarSenha(_pwd);

            AutoItX.WinWait(sNomeJanela, "", 20);
            AutoItX.WinActivate(sNomeJanela, "");

            // Espero a tela [Login] aparecer
            string sJanelaDeEspera = "";
            DateTime tempoEspera = DateTime.Now;
            while (sJanelaDeEspera == "")
            {
                if (AutoItX.WinExists(sNomeJanela) == 1)
                {
                    sJanelaDeEspera = sNomeJanela;

                    // Insiro Usuário
                    Thread.Sleep(500);
                    AutoItX.Send(_user + "{TAB}");

                    // Insiro Senha
                    Thread.Sleep(500);
                    AutoItX.Send(sSenhaTratada + "{TAB}{Enter}");

                    break;
                }

                if ((DateTime.Now - tempoEspera).TotalSeconds > 50)
                    break;

                Thread.Sleep(500);
            }
______________________________________________________________________________________________________________

# PEGAR CAMINHO DA PASTA DO USUÁRIO DE REDE
string userPath = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
string ramal = "";

# Lê todas as linhas do arquivo.
string[] lines = System.IO.File.ReadAllLines(userPath + @"\AppData\local\3CXVoipPhone.ini");

            //Percorre a lista de linhas do arquivo.
            for (int i = 0; i < lines.Length; i++)
            {
                //Gera as colunas da linha atual com base no separador ","
                string[] sDados = lines[i].Split(',');

                //Checa se há dados para atribuir a coluna 1.
                if (sDados.Length > 0)
                {
                    string sColunaName = sDados[0];

                    if (sColunaName.Length > 6 && sColunaName.Contains("Name="))
                    {
                        ramal = sColunaName.Replace("Name=", "");
                        break;
                    }
                }
            }
______________________________________________________________________________________________________________
# SOMENTE NÚMERO 

string alvo = "---1245dsee845xs+-875";
string result = Regex.Replace(alvo, @"[^\d]", "");
______________________________________________________________________________________________________________
# FECHAR PROCESSO
 
Process[] runingProcess = Process.GetProcesses();
            for (int i = 0; i < runingProcess.Length; i++)
            {
                if (runingProcess[i].ProcessName.Contains("3CXPhone"))
                    runingProcess[i].Kill();
            }
______________________________________________________________________________________________________________
# AUTOITX

AUTOITX


______________________________________________________________________________________________________________
# LER DENTRO DE ARQUIVO

            string ramal = "";
            string userPath = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
            string[] linhas = System.IO.File.ReadAllLines(userPath + @"\AppData\local\3CX VoIP Phone\3CXVoipPhone.ini");

            for (int i = 0; i < linhas.Length; i++)
            {
                string[] sDados = linhas[i].Split(',');

                if (sDados.Length > 0)
                {
                    string sColunaName = sDados[0];

                    if (sColunaName.Length > 6 && sColunaName.Contains("Name="))
                    {
                        ramal = sColunaName.Replace("Name=", "");
                        break;
                    }
                }
            } 
______________________________________________________________________________________________________________
# LIMPAR CACHE NAVEGADOR GOOGLE CHROME

 private void LimparContasNavegador()
        {
            string rootDrive = Path.GetPathRoot(Environment.SystemDirectory);
            string userName = Environment.UserName;

            try
            {
                Process[] Path1 = Process.GetProcessesByName("chrome");
                foreach (Process p in Path1)
                {
                    try
                    {
                        p.Kill();
                    }
                    catch { }
                    p.WaitForExit();
                    p.Dispose();
                }

                System.IO.DirectoryInfo downloadedMessageInfo = new DirectoryInfo(rootDrive + "Users\\" + userName + "\\AppData\\Local\\Google\\Chrome\\User Data");

                try
                {
                    foreach (FileInfo file in downloadedMessageInfo.GetFiles())
                        file.Delete();
                }
                catch { }

                try
                {
                    foreach (DirectoryInfo dir in downloadedMessageInfo.GetDirectories())
                        dir.Delete(true);
                }
                catch { }
            }
            catch { }
        }
______________________________________________________________________________________________________________
# PEGAR APENAS O NOME DO SITE

string UrlSemWWW = url.Replace("www.", "");
string sUrl = UrlSemWWW.Substring(0, UrlSemWWW.IndexOf('.')).Replace("https://", "").Replace("http://", "");
______________________________________________________________________________________________________________
# LIBERAR CERTIFICADO (NÃO RECOMENDADO EM PRODUÇÃO) APENAS SE NA MÁQUINA OCORRER ERRO DE CERTIFICADO

  public static class CockpitService
  private static readonly ICockpitService _cockpitService = RestService.For<ICockpitService>("https://localhost:7109");

        static CockpitService()
        {
            IgnoreBadCertificates();
        }

        public static void IgnoreBadCertificates()
        {
            System.Net.ServicePointManager.ServerCertificateValidationCallback = new System.Net.Security.RemoteCertificateValidationCallback(AcceptAllCertifications);
        }

        private static bool AcceptAllCertifications(object sender, System.Security.Cryptography.X509Certificates.X509Certificate certification, System.Security.Cryptography.X509Certificates.X509Chain chain, System.Net.Security.SslPolicyErrors sslPolicyErrors)
        {
            return true;
        }
______________________________________________________________________________________________________________
# WHILE COM TIMER  
  
  long startTime = DateTime.Now.Ticks / TimeSpan.TicksPerMillisecond;
  string pageTitle = "Entrar em sua conta"; // Título da página
  int pageIsActive;
 
 while (true)
	{
		pageIsActive = AutoItX.WinExists("[TITLE:" + pageTitle + "]");

		if (pageIsActive == 1)
		{
			// FAÇA
			break;
		}
		else
		{
			// Pequena pausa se a página não estiver ativa
			Thread.Sleep(1000);
		}

		// Obtém o tempo atual em milissegundos
		long currentTime = DateTime.Now.Ticks / TimeSpan.TicksPerMillisecond;

		// Verifica se o tempo de execução excedeu 1 minuto e pouco (80000 segundos) e sai do loop
		if ((currentTime - startTime) >= 20000)
			break;

		// Aguarda 1 segundo antes de verificar novamente
		Thread.Sleep(1000);
	}
______________________________________________________________________________________________________________
# TIMER PARA AGUARDAR A PÁGINA CARREGAR

     int timeout = 80000; // tempo limite em milissegundos (80 segundos)
     DateTime start = DateTime.Now; // horário atual
     
  while (AutoItX.WinExists(pageTitle) != 1)
    {
       // Se o tempo limite for atingido, interrompa o loop
      if ((DateTime.Now - start).TotalMilliseconds > timeout)
         {
             writer.WriteLine("Página não exibida após {0} segundos.", timeout / 1000);
             break;
         }

        // Aguarde 1 segundo antes de verificar novamente
        Thread.Sleep(1000);
    }
______________________________________________________________________________________________________________
# AUTOMAÇÃO AUTOITX

                // INJETAR CÓDIGO VIA CONSOLE NAVEGADOR
                AutoItX.WinWait(sNomeJanela, "", 20);
                AutoItX.WinActivate(sNomeJanela, "");
                Thread.Sleep(100);

                // Abre o console do Chrome e injeta o código JavaScript
                AutoItX.Send("^+j"); // Abre o console do Chrome
                Thread.Sleep(500);
                AutoItX.WinActivate(sNomeJanela, "");
                Thread.Sleep(500);
                AutoItX.Send("document.evaluate('/html/body/section[3]/div[2]/section[5]/div[5]/div/ul/li[22]/a[4]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();");
                Thread.Sleep(2000);
                AutoItX.Send("{ENTER}");
                Thread.Sleep(500);
                AutoItX.Send("^+j"); // Fecha o console do Chrome
				
				// FOCO NA BARRA DE ENDEREÇO
				Thread.Sleep(2000);
                AutoItX.Send("^l");

                // Apagando a url antiga na barra de navegação
                AutoItX.Send("{BACKSPACE}");
______________________________________________________________________________________________________________
# OCULTAR BOTÃO MOSTRAR SENHA GOOGLE CHROME

 // Ocultar ícone mostrar senha
	Thread.Sleep(200);
	string ocultarMostrarSenha = "const elementToRemove = document.evaluate('/html/body/div/div[2]/div/div/div/div/div/div/div/div[2]/div/form/div[2]/span/div/div[1]/div[2]/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;elementToRemove.remove();";
	_chrome.RunJavascript(ocultarMostrarSenha);
	
______________________________________________________________________________________________________________
# Abro uma nova Aba no mesmo navegador
                Thread.Sleep(7000);
                AutoItX.Send("^{t}");







  var sNomeJanela = "Ponto";
            AutoItX.WinWait(sNomeJanela, "", 20);
            AutoItX.WinActivate(sNomeJanela, "");

            string title = Process.GetCurrentProcess().MainWindowTitle;

            // Verifica se o título da janela contém a string "DevTools"
            if (title.Contains("DevTools - "))
            {
                Console.WriteLine("O console do DevTools está ativo na página atual.");
            }
            else
            {
                Console.WriteLine("O console do DevTools não está ativo na página atual.");
            }
			
			
			

______________________________________________________________________________________________________________
string pageTitle = @"SAP Logon 730 - \\Remote";
AutoItX.WinWait(pageTitle, "", 20);
AutoItX.WinActivate(pageTitle, "");

// Aguarda a nova página abrir
AutoItX.WinWaitActive(pageTitle, "", 30);

Na linha adicionada ao código acima, a função WinWaitActive() aguarda a janela especificada ser ativada por até 30 segundos antes de continuar com a execução do código. Isso permite que o código aguarde a nova página ser aberta sem ficar em um loop infinito, aumentando assim a robustez da solução.
______________________________________________________________________________________________________________
# 3 - PEGAR RAMAL DO 3CX NO ARQUIVO INI
            string ramal = "";
            string userPath = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
            string[] linhas = System.IO.File.ReadAllLines(userPath + @"\AppData\local\3CX VoIP Phone\3CXVoipPhone.ini");

            for (int i = 0; i < linhas.Length; i++)
            {
                string[] sDados = linhas[i].Split(',');

                if (sDados.Length > 0)
                {
                    string sColunaName = sDados[0];

                    if (sColunaName.Length > 6 && sColunaName.Contains("Name="))
                    {
                        ramal = sColunaName.Replace("Name=", "");
                        break;
                    }
                }
            }         

______________________________________________________________________________________________________________










